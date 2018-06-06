"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = require("./manager");
exports.Manager = manager_1.Manager;
const InMemoryPersistenceManager_1 = require("./persistences/InMemoryPersistenceManager");
exports.InMemoryPersistenceManager = InMemoryPersistenceManager_1.default;
const LocalStoragePersistenceManager_1 = require("./persistences/LocalStoragePersistenceManager");
exports.LocalStoragePersistenceManager = LocalStoragePersistenceManager_1.default;
const platform_1 = require("./platform");
exports.PlatformConfig = platform_1.default;