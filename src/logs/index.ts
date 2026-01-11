/**
 * ABOUTME: Iteration logs module exports.
 * Provides persistence and management for iteration output logs,
 * plus structured logging for headless/CI mode.
 */

export type {
  IterationLog,
  IterationLogMetadata,
  IterationLogSummary,
  LogFilterOptions,
  LogCleanupOptions,
  LogCleanupResult,
} from './types.js';

export { ITERATIONS_DIR } from './types.js';

export {
  generateLogFilename,
  getIterationsDir,
  ensureIterationsDir,
  buildMetadata,
  saveIterationLog,
  loadIterationLog,
  listIterationLogs,
  getIterationLogByNumber,
  getIterationLogsByTask,
  cleanupIterationLogs,
  getIterationLogCount,
  hasIterationLogs,
  getIterationLogsDiskUsage,
} from './persistence.js';

export type {
  LogLevel,
  LogComponent,
  StructuredLoggerConfig,
} from './structured-logger.js';

export {
  StructuredLogger,
  createStructuredLogger,
} from './structured-logger.js';
