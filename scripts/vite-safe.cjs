const childProcess = require("node:child_process");
const { EventEmitter } = require("node:events");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const originalExec = childProcess.exec;

childProcess.exec = function patchedExec(command, ...args) {
  if (typeof command === "string" && command.trim().toLowerCase() === "net use") {
    const callback = [...args].reverse().find((arg) => typeof arg === "function");
    if (callback) {
      process.nextTick(() => callback(new Error("Blocked net use workaround"), ""));
    }

    const dummy = new EventEmitter();
    dummy.pid = 0;
    dummy.kill = () => false;
    return dummy;
  }

  return originalExec.call(this, command, ...args);
};

const vitePkgPath = require.resolve("vite/package.json");
const viteBinPath = path.join(path.dirname(vitePkgPath), "bin", "vite.js");
import(pathToFileURL(viteBinPath).href);
