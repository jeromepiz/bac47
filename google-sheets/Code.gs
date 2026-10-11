/**
 * Le Mystère du Bac 47 : enregistrement des résultats dans Google Sheets.
 * À coller dans Extensions > Apps Script du tableur, puis Déployer > Nouveau déploiement > Application Web.
 */
var ENTETES = ['Date', 'Nom', 'Titre', 'Agence', 'Score /120', 'Grade', 'Durée (min)',
  'Ch.1 Photo /35', 'Ch.2 Témoins /20', 'Ch.3 Chronologie /20', 'Ch.4 Causes /20', 'Ch.5 Réflexes /25'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var d = JSON.parse(e.postData.contents);
    var feuille = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (feuille.getLastRow() === 0) {
      feuille.appendRow(ENTETES);
      feuille.getRange(1, 1, 1, ENTETES.length).setFontWeight('bold');
      feuille.setFrozenRows(1);
    }
    // Texte tronqué, et neutralisé s'il commence comme une formule (=, +, -, @).
    var t = function (v, n) { var s = String(v == null ? '' : v).slice(0, n); return /^[=+\-@]/.test(s) ? "'" + s : s; };
    var num = function (v) { var x = Number(v); return isFinite(x) ? x : ''; };
    feuille.appendRow([
      new Date(), t(d.nom, 30), t(d.titre, 12), t(d.agence, 30),
      num(d.score), t(d.grade, 30), num(d.duree_min),
      num(d.ch1), num(d.ch2), num(d.ch3), num(d.ch4), num(d.ch5)
    ]);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('Le Mystère du Bac 47 : le suivi des résultats est actif.');
}
