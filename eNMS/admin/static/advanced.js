/*
global
alertify: false
call: false
convertSelect: false
doc: false
fCall: false
folders: false
*/

/**
 * Export all for migration.
 */
function migrationsExport() { // eslint-disable-line no-unused-vars
  alertify.notify('Export initiated.', 'success', 5);
  fCall('/admin/migration_export', '#import-export-form', function() {
    alertify.notify('Export successful.', 'success', 5);
  });
}

/**
 * Import all for migration.
 */
function migrationsImport() { // eslint-disable-line no-unused-vars
  alertify.notify('Import initiated.', 'success', 5);
  fCall('/admin/migration_import', '#import-export-form', function(result) {
    alertify.notify(result, 'success', 5);
  });
}

/**
 * Database Helpers.
 */
function databaseHelpers() { // eslint-disable-line no-unused-vars
  fCall('/admin/database_helpers', '#database-helpers-form', function(result) {
    alertify.notify('Done.', 'success', 5);
  });
}

/**
 * Reset Status.
 */
function resetStatus() { // eslint-disable-line no-unused-vars
  call('/admin/reset_status', function(result) {
    alertify.notify('Reset successful.', 'success', 5);
  });
}

/**
 * Git Action.
 */
function getGitContent() { // eslint-disable-line no-unused-vars
  call('/admin/get_git_content', function(result) {
    alertify.notify('Action successful.', 'success', 5);
  });
}

/**
 * Start or shutdown the scheduler.
 * @param {action} action - Pause or resume.
 */
function scheduler(action) { // eslint-disable-line no-unused-vars
  call(`/admin/scheduler/${action}`, function() {
      alertify.notify(`Scheduler ${action}d.`, 'success', 5);
    }
  );
}

(function() {
  convertSelect('#import_export_types', '#deletion_types');
  $('#clear_logs_date').datetimepicker({
    format: 'DD/MM/YYYY HH:mm:ss',
    widgetPositioning: {
      horizontal: 'left',
      vertical: 'bottom',
    },
    useCurrent: false,
  });
  folders.forEach((f) => {
    $('#versions').append(`<option value='${f}'></option>`);
  });
  doc('https://enms.readthedocs.io/en/latest/base/migrations.html');
})();