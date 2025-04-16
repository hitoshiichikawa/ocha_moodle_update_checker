//────────────────────────────────────────────
// グローバル変数（初期値はダミー、loadConfig()で上書きされる）
var USERNAME = "";
var PASSWORD = "";
var MAIL_RECEIVERS = "";
var LOGIN_URL  = "https://moodle.fz.ocha.ac.jp/R7/login/index.php";

// LINE用グローバル変数（スクリプトプロパティからloadParametersでロード）
var LINE_CHANNEL_ID = "";
var LINE_CHANNEL_ACCESS_TOKEN = "";

// 対象ページ情報：page_name と page_url
var pages = [
  { page_name: "学校からのお知らせ",            page_url: "https://moodle.fz.ocha.ac.jp/R7/course/view.php?id=26172" },
  { page_name: "学校だより",                    page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=281" },
  { page_name: "学校行事等にかかわるお知らせ",      page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=4557" },
  { page_name: "学用品等に関するお知らせ",         page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=5097" },
  { page_name: "児童指導部からのお知らせ",         page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=3126" },
  { page_name: "各種届出用紙等",                 page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=4555" },
  { page_name: "ICT利用案内について",             page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=5619" },
  { page_name: "小学校給食室",                  page_url: "https://moodle.fz.ocha.ac.jp/R7/course/view.php?id=26145" },
  { page_name: "School Lunch Time",            page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=4160" },
  { page_name: "献立表",                        page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=2257" },
  { page_name: "給食停止希望届",                page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=5531" },
  { page_name: "給食レシピ",                    page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=823" },
  { page_name: "小学校保健室",                  page_url: "https://moodle.fz.ocha.ac.jp/R7/course/view.php?id=26144" },
  { page_name: "保健室-一般",                    page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=22" },
  { page_name: "保健室-更新情報",                page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=291" },
  { page_name: "欠席の様子",                    page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=3122" },
  { page_name: "ほけんだより",                  page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=293" },
  { page_name: "出席・欠席について",             page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=292" },
  { page_name: "保健のしおり",                  page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=4546" },
  { page_name: "インフルエンザ関連",             page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=2001" },
  { page_name: "コロナワクチン関連",             page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=296" },
  { page_name: "参考資料",                      page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=297" },
  { page_name: "お茶っ子相談室",                page_url: "https://moodle.fz.ocha.ac.jp/R7/course/view.php?id=26146" },
  { page_name: "悩みを相談したい時は",            page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=972" },
  { page_name: "お茶っ子相談室から",             page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=883" },
  { page_name: "かがみ会・各種団体",              page_url: "https://moodle.fz.ocha.ac.jp/R7/course/view.php?id=26183" },
  { page_name: "掲載更新連絡",                  page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=38" },
  { page_name: "2025年度かがみ会総会",            page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=4600" },
  { page_name: "2025年度かがみ会通信",            page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=4621" },
  { page_name: "企画委員会",                    page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=4737" },
  { page_name: "厚生委員会",                    page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=4573" },
  { page_name: "図書ボランティア(2025年度)",      page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=732" },
  { page_name: "環境整備ボランティア",            page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=2633" },
  { page_name: "教育後援会",                    page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=4602" },
  { page_name: "桜蔭会（お茶大同窓会）より",        page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=307" },
  { page_name: "全附Ｐ連",                     page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=3827" },
  { page_name: "1年学年からの連絡",             page_url: "https://moodle.fz.ocha.ac.jp/R7/course/view.php?id=26376" },
  { page_name: "1年学年からの連絡-一般",         page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=3880" },
  { page_name: "1年むすぶ",                   page_url: "https://moodle.fz.ocha.ac.jp/R7/course/view.php?id=26377" },
  { page_name: "1年むすぶ-一般",               page_url: "https://moodle.fz.ocha.ac.jp/R7/course/section.php?id=3885" }
];

// 定数：共通の User-Agent
var USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36";

//────────────────────────────────────────────
// グローバル Cookie ストア
//────────────────────────────────────────────
var cookieStore = {};

//────────────────────────────────────────────
// 設定読み込み：loadConfig()（全設定を統合）
//────────────────────────────────────────────
function loadConfig() {
  var scriptProps = PropertiesService.getScriptProperties();
  
  // USERNAME, PASSWORD の取得
  USERNAME = scriptProps.getProperty("USERNAME");
  PASSWORD = scriptProps.getProperty("PASSWORD");
  if (!USERNAME || !PASSWORD) {
    Logger.log("エラー: USERNAME または PASSWORD がスクリプトプロパティに設定されていません。");
    throw new Error("USERNAME または PASSWORD が設定されていません。");
  }
  
  // 「プロパティ」シートから MAIL_RECEIVERS を取得する
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var propSheet = ss.getSheetByName("プロパティ");
  if (!propSheet) {
    Logger.log("エラー: プロパティシートが見つかりません。");
    throw new Error("プロパティシートがありません。");
  }
  var range = propSheet.getRange("A:B");
  var values = range.getValues();
  var mailStr = null;
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] === "MAIL_RECEIVERS") {
      mailStr = values[i][1];
      break;
    }
  }
  if (!mailStr) {
    Logger.log("エラー: プロパティシートに MAIL_RECEIVERS の設定がありません。");
    throw new Error("MAIL_RECEIVERS の設定がプロパティシートにありません。");
  }
  var emails = mailStr.split(",").map(function(email) {
    return email.trim();
  });
  var emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  emails.forEach(function(email) {
    if (!emailRegex.test(email)) {
      Logger.log("エラー: 無効なメールアドレス: " + email);
      throw new Error("無効なメールアドレスが設定されています: " + email);
    }
  });
  MAIL_RECEIVERS = emails.join(",");
  Logger.log("MAIL_RECEIVERS 設定完了: " + MAIL_RECEIVERS);

  // LINE 用パラメータの取得
  LINE_CHANNEL_ID = scriptProps.getProperty("LINE_CHANNEL_ID");
  LINE_CHANNEL_ACCESS_TOKEN = scriptProps.getProperty("LINE_CHANNEL_ACCESS_TOKEN");
  if (!LINE_CHANNEL_ID || !LINE_CHANNEL_ACCESS_TOKEN) {
    Logger.log("エラー: LINE_CHANNEL_ID または LINE_CHANNEL_ACCESS_TOKEN がスクリプトプロパティに設定されていません。");
    throw new Error("LINE_CHANNEL_ID または LINE_CHANNEL_ACCESS_TOKEN が設定されていません。");
  }
  Logger.log("LINE_CHANNEL_ID と LINE_CHANNEL_ACCESS_TOKEN の設定完了");
}


//────────────────────────────────────────────
// HTML 取得・加工系（既存機能）
//────────────────────────────────────────────
function loginAndGetCookies() {
  var optionsGet = { "headers": { "User-Agent": USER_AGENT } };
  var getResponse = UrlFetchApp.fetch(LOGIN_URL, optionsGet);
  var getHtml = getResponse.getContentText();
  var tokenRegex = /name="logintoken"[^>]*value="([^"]+)"/;
  var matches = getHtml.match(tokenRegex);
  var logintoken = matches ? matches[1] : "";
  Logger.log("取得した logintoken: " + logintoken);
  var getHeaders = getResponse.getAllHeaders();
  mergeCookiesFromHeader(cookieStore, getHeaders["Set-Cookie"]);
  Logger.log("GET 時点の Cookie: " + formatCookies(cookieStore));
  
  var payload = {
    "username": USERNAME,
    "password": PASSWORD,
    "logintoken": logintoken,
    "anchor": ""
  };
  var optionsPost = {
    "method": "post",
    "payload": payload,
    "followRedirects": false,
    "contentType": "application/x-www-form-urlencoded",
    "headers": {
      "User-Agent": USER_AGENT,
      "Cookie": formatCookies(cookieStore),
      "Referer": LOGIN_URL
    }
  };
  var loginResponse = UrlFetchApp.fetch(LOGIN_URL, optionsPost);
  var postHeaders = loginResponse.getAllHeaders();
  Logger.log("ログイン時のPOSTレスポンスヘッダー全体: " + JSON.stringify(postHeaders));
  Logger.log("ログイン時のPOST Set-Cookie ヘッダー: " + postHeaders["Set-Cookie"]);
  mergeCookiesFromHeader(cookieStore, postHeaders["Set-Cookie"]);
  
  var locationHeader = postHeaders["Location"];
  if (locationHeader) {
    Logger.log("リダイレクト先の Location: " + locationHeader);
    if (!/^https?:\/\//i.test(locationHeader)) {
      var domainMatch = LOGIN_URL.match(/https?:\/\/[^\/]+/i);
      if (domainMatch) { locationHeader = domainMatch[0] + locationHeader; }
    }
    var redirectOptions = {
      "headers": {
        "Cookie": formatCookies(cookieStore),
        "User-Agent": USER_AGENT,
        "Referer": LOGIN_URL
      },
      "followRedirects": true
    };
    var redirectResponse = UrlFetchApp.fetch(locationHeader, redirectOptions);
    var redirectHeaders = redirectResponse.getAllHeaders();
    Logger.log("リダイレクト先のレスポンスヘッダー: " + JSON.stringify(redirectHeaders));
    mergeCookiesFromHeader(cookieStore, redirectHeaders["Set-Cookie"]);
  }
  
  var cookieString = formatCookies(cookieStore);
  Logger.log("【ホームページアクセス前】Cookie: " + cookieString);
  var homeOptions = {
    "headers": {
      "Cookie": cookieString,
      "User-Agent": USER_AGENT,
      "Referer": LOGIN_URL
    },
    "followRedirects": true
  };
  Logger.log("【ホームページアクセス】リクエストに使用する Cookie: " + cookieString);
  var homeResponse = UrlFetchApp.fetch("https://moodle.fz.ocha.ac.jp/R7/", homeOptions);
  var homeHeaders = homeResponse.getAllHeaders();
  Logger.log("ホームページアクセス時のレスポンスヘッダー: " + JSON.stringify(homeHeaders));
  mergeCookiesFromHeader(cookieStore, homeHeaders["Set-Cookie"]);
  
  cookieString = formatCookies(cookieStore);
  Logger.log("更新後の Cookie: " + cookieString);
  return cookieString;
}

function mergeCookiesFromHeader(cookies, setCookieHeader) {
  if (!setCookieHeader) return;
  if (Array.isArray(setCookieHeader)) {
    setCookieHeader.forEach(function(cookieStr) {
      processCookiePair(cookies, cookieStr);
    });
  } else {
    processCookiePair(cookies, setCookieHeader);
  }
}

function processCookiePair(cookies, cookieStr) {
  var pair = cookieStr.split(';')[0].split('=');
  var key = pair[0].trim();
  var value = pair[1] ? pair[1].trim() : "";
  cookies[key] = value;
}

function formatCookies(cookies) {
  return Object.keys(cookies).map(function(key) {
    return key + "=" + cookies[key];
  }).join("; ");
}

function fetchPageContent(url, cookies) {
  var options = {
    "headers": {
      "Cookie": cookies,
      "User-Agent": USER_AGENT
    },
    "followRedirects": true
  };
  Logger.log("【fetchPageContent】リクエストに使用する Cookie: " + cookies);
  try {
    var response = UrlFetchApp.fetch(url, options);
    var headers = response.getAllHeaders();
    mergeCookiesFromHeader(cookieStore, headers["Set-Cookie"]);
    Logger.log("【fetchPageContent】更新後の Cookie: " + formatCookies(cookieStore));
    var content = response.getContentText();
    return { content: content, headers: headers };
  } catch(e) {
    Logger.log("ページ取得エラー: " + e);
    return null;
  }
}

function extractPageContent(html) {
  var startIndex = html.indexOf('<div id="region-main-box"');
  if (startIndex === -1) return html;
  var startTagEnd = html.indexOf('>', startIndex);
  if (startTagEnd === -1) return html;
  var contentStart = startTagEnd + 1;
  var openCount = 1;
  var pos = contentStart;
  while (openCount > 0) {
    var nextOpen = html.indexOf('<div', pos);
    var nextClose = html.indexOf('</div>', pos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      openCount++;
      pos = nextOpen + 4;
    } else {
      openCount--;
      pos = nextClose + 6;
    }
  }
  
  var content = html.substring(contentStart, pos - 6);
  
  content = removeNavigationElements(content);
  
  return content;
}

function removeNavigationElements(content) {
  content = removeElementByClass(content, "section-navigation navigationtitle");
  
  content = removeElementByClass(content, "section-navigation mdl-bottom");
  
  return content;
}

function removeElementByClass(html, className) {
  var startIndex = html.indexOf('<div class="' + className);
  if (startIndex === -1) return html;
  
  var startTagEnd = html.indexOf('>', startIndex);
  if (startTagEnd === -1) return html;
  
  var contentStart = startTagEnd + 1;
  var openCount = 1;
  var pos = contentStart;
  
  while (openCount > 0) {
    var nextOpen = html.indexOf('<div', pos);
    var nextClose = html.indexOf('</div>', pos);
    
    if (nextClose === -1) break;
    
    if (nextOpen !== -1 && nextOpen < nextClose) {
      openCount++;
      pos = nextOpen + 4;
    } else {
      openCount--;
      pos = nextClose + 6;
    }
  }
  
  return html.substring(0, startIndex) + html.substring(pos);
}

function filterDynamicAttributes(content) {
  content = content.replace(/<script[\s\S]*?<\/script>/gi, '');
  content = content.replace(/\s*id="(?:random[^"]*|down-[^"]*|menu-[^"]*|sessKey[^"]*|list-[^"]*|container-[^"]*|toggle-[^"]*|searchinput-[^"]*|month-[^"]*|navigation-[^"]*|format-[^"]*|url_select[^"]*|single_button[^"]*)"/gi, '');
  content = content.replace(/\s*aria-controls="(?:random[^"]*|down-[^"]*|menu-[^"]*|sessKey[^"]*|list-[^"]*|container-[^"]*|toggle-[^"]*|searchinput-[^"]*|month-[^"]*|navigation-[^"]*|format-[^"]*|url_select[^"]*|single_button[^"]*)"/gi, '');
  content = content.replace(/\s*aria-labelledby="(?:random[^"]*|down-[^"]*|menu-[^"]*|sessKey[^"]*|list-[^"]*|container-[^"]*|toggle-[^"]*|searchinput-[^"]*|month-[^"]*|navigation-[^"]*|format-[^"]*|url_select[^"]*|single_button[^"]*)"/gi, '');
  content = content.replace(/(?:random|down-|menu-|sessKey|list-|container-|toggle-|searchinput-|month-|navigation-|format-|url_select|single_button)[^\n]*/gi, '');
  
  content = content.replace(/\s*aria-expanded="(?:true|false)"/gi, '');
  content = content.replace(/\s*class="([^"]*)(?:expanded|icons-collapse|collapse|folded|unfolded)([^"]*)"/gi, '');
  content = content.replace(/\s*data-(?:expanded|collapse|folded|unfolded|toggle-state)="[^"]*"/gi, '');
    
  return content;
}

function computeHash(content) {
  var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, content);
  var hash = digest.map(function(byte) {
    var b = byte;
    if (b < 0) { b += 256; }
    var hex = b.toString(16);
    return (hex.length === 1) ? "0" + hex : hex;
  }).join("");
  return hash;
}

function extractTitle(html) {
  var match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? match[1] : "";
}

//────────────────────────────────────────────
// シート操作系（「メイン」シート関連は削除し、マスタシートのみを使用）
//────────────────────────────────────────────
function getMasterSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("マスタ");
  if (!sheet) {
    sheet = ss.insertSheet("マスタ");
    sheet.clear();
    // セルA1に実行日時（全体の実行日時）を記入する
    sheet.getRange("A1").setValue(new Date());
    // ヘッダー行（2行目）：page_name, hash, 更新, チェック日時
    sheet.appendRow(["page_name", "hash", "isUpdated", "executed_at"]);
    // 初期データ：pages の page_name を登録（3行目以降）
    pages.forEach(function(page) {
      sheet.appendRow([page.page_name, "", "", ""]);
    });
  }
  return sheet;
}

/**
 * updateMasterSheet(newData)
 * マスタシートの各行（行3以降）について、newData のオブジェクト（{page_name, hash, page_url}）と照合し、
 * ハッシュが異なれば、B列を新hashに更新し、C列に「更新」を記入、D列にチェック日時を記入。
 * ハッシュが同じならC列を空欄にし、D列にチェック日時を記入する。
 * 更新されたページ情報の配列を返す（メール送信に利用）。
 */
function updateMasterSheet(newData) {
  var sheet = getMasterSheet();
  // A1セルは実行日時（上書きする）
  sheet.getRange("A1").setValue(new Date());
  
  // データは2行目以降のうち、ヘッダーは2行目、実データは3行目から
  var lastRow = sheet.getLastRow();
  var numRows = lastRow - 2;
  if (numRows <= 0) return [];
  var dataRange = sheet.getRange(3, 1, numRows, 4);
  var data = dataRange.getValues();
  var updates = [];
  var checkTime = new Date();
  
  newData.forEach(function(item) {
    for (var i = 0; i < data.length; i++) {
      if (data[i][0] === item.page_name) {
        var oldHash = data[i][1];
        if (oldHash !== item.hash) {
          data[i][1] = item.hash;
          data[i][2] = "更新";
          data[i][3] = checkTime;
          updates.push(item);
        } else {
          data[i][2] = "";
          data[i][3] = checkTime;
        }
        break;
      }
    }
  });
  
  dataRange.setValues(data);
  return updates;
}

/**
 * appendRowToLogSheet(page_name, url, title, hash, emptyStr, timestamp, filteredText)
 * 「ログ」シートに 1 行追加する。
 * A列: page_name, B列: URL, C列: title, D列: hash, E列: 空文字列, F列: 書き込み日時
 * ※ filteredText はデバッグ用として Logger.log() に出力する。
 */
function appendRowToLogSheet(page_name, url, title, hash, emptyStr, timestamp, filteredText) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("ログ");
  if (!sheet) {
    sheet = ss.insertSheet("ログ");
    sheet.clear();
    sheet.appendRow(["page_name", "URL", "title", "hash", "", "書き込み日時"]);
  }
  sheet.appendRow([page_name, url, title, hash, emptyStr, timestamp]);
  Logger.log("【DEBUG】フィルタ済みテキスト: " + filteredText);
}

/**
 * sendUpdateEmail(updates)
 * 更新があったページ情報からメール本文を作成し、
 * グローバル変数 MAIL_RECEIVERS に送信する。
 */
function sendUpdateEmail(updates) {
  if (updates.length === 0) return;
  var subject = "お茶の水Moodle更新のお知らせ";
  var body = "お茶の水Moodleの以下のページが更新されました\n\n";
  updates.forEach(function(item) {
    body += item.page_name + ": " + item.page_url + "\n";
  });
  MailApp.sendEmail(MAIL_RECEIVERS, subject, body);
  Logger.log("メール送信完了");
}

//────────────────────────────────────────────
// LINEユーザー管理シート操作系
//────────────────────────────────────────────
function getLineSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("LINE");
  if (!sheet) {
    sheet = ss.insertSheet("LINE");
    sheet.clear();
    // ヘッダー設定：必要なパラメータを列ごとに登録
    // ※ここでは、userId, eventType, replyToken, sourceType, timestamp, destination, rawData を保存
    sheet.appendRow(["userId", "eventType", "replyToken", "sourceType", "timestamp", "destination", "rawData"]);
  }
  return sheet;
}

function addLineUser(eventObj) {
  // followイベント時に呼び出し。eventObjはJSONオブジェクトの1イベント分（followイベント）
  var sheet = getLineSheet();
  var userId = eventObj.source.userId;
  
  // 既に登録済みかチェック（userIdが一致する行があれば更新しない）
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {  // ヘッダー行を除く
    if (data[i][0] === userId) {
      Logger.log("既に登録済みのユーザー: " + userId);
      return;
    }
  }
  
  // 新規登録
  var eventType = eventObj.type;
  var replyToken = eventObj.replyToken || "";
  var sourceType = eventObj.source.type || "";
  var timestamp = eventObj.timestamp;
  var destination = eventObj.destination || "";
  var rawData = JSON.stringify(eventObj);
  sheet.appendRow([userId, eventType, replyToken, sourceType, timestamp, destination, rawData]);
  Logger.log("LINEユーザーを追加: " + userId);
}

function removeLineUser(userId) {
  var sheet = getLineSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = data.length - 1; i >= 1; i--) {  // ヘッダーを除く
    if (data[i][0] === userId) {
      sheet.deleteRow(i + 1);
      Logger.log("LINEユーザーを削除: " + userId);
    }
  }
}

//────────────────────────────────────────────
// LINE通知送信系
//────────────────────────────────────────────
/**
 * sendLinePushNotifications(message)
 * 登録されているLINEユーザー全員に対して、指定されたメッセージをプッシュ通知する。
 * 送信失敗時は3回までリトライし、3回失敗した場合はログにエラーメッセージを出力するのみとする。
 */
function sendLinePushNotifications(message) {
  var sheet = getLineSheet();
  var data = sheet.getDataRange().getValues();
  // ヘッダー行は除く
  for (var i = 1; i < data.length; i++) {
    var userId = data[i][0];
    var success = sendLinePushMessage(userId, message);
    if (!success) {
      Logger.log("LINE通知：3回連続で送信失敗、ユーザー " + userId + " への送信は失敗しました。");
      // ユーザー行の削除は行わない
    }
  }
}

/**
 * sendLinePushMessage(userId, message)
 * 1ユーザーに対してLINEプッシュ通知を送信（最大3回リトライ）
 * 成功時はtrue、失敗時はfalseを返す。
 */
function sendLinePushMessage(userId, message) {
  var url = "https://api.line.me/v2/bot/message/push";
  var payload = {
    "to": userId,
    "messages": [
      { "type": "text", "text": message }
    ]
  };
  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
    "headers": {
      "Authorization": "Bearer " + LINE_CHANNEL_ACCESS_TOKEN
    },
    "muteHttpExceptions": true  // HTTPエラーでもエラーをスローしない
  };
  
  for (var i = 0; i < 3; i++) {
    try {
      var response = UrlFetchApp.fetch(url, options);
      var responseCode = response.getResponseCode();
      var responseText = response.getContentText();
      Logger.log("LINE APIレスポンス (userId: " + userId + "): HTTP " + responseCode + " - " + responseText);
      if (responseCode >= 200 && responseCode < 300) {
        Logger.log("LINEプッシュ通知送信成功: " + userId);
        return true;
      } else {
        Logger.log("LINEプッシュ通知送信エラー（HTTP " + responseCode + "）: " + userId);
      }
    } catch(e) {
      Logger.log("LINEプッシュ通知送信例外: " + e + " ユーザー: " + userId);
    }
    Utilities.sleep(1000); // 1秒待機して再試行
  }
  return false;
}

//────────────────────────────────────────────
// doPost: LINE webhook 用エンドポイント
//────────────────────────────────────────────
/**
 * LINEからのWebhookを処理するエンドポイント
 * followイベント → ユーザー追加
 * unfollow（ブロック含む）イベント → ユーザー削除
 * その他のイベントは通知せず、必要に応じて処理を拡張してください。
 */
function doPost(e) {
  try {
    var json = JSON.parse(e.postData.contents);
    Logger.log("LINE webhook受信: " + JSON.stringify(json));
    if (json.events && json.events.length > 0) {
      json.events.forEach(function(eventObj) {
        if (eventObj.type === "follow") {
          addLineUser(eventObj);
        } else if (eventObj.type === "unfollow") {
          // unfollowイベントの場合、ユーザーIDは eventObj.source.userId
          removeLineUser(eventObj.source.userId);
        }
        // その他のイベントは特に処理しない（メッセージは無視）
      });
    }
    // 応答用として空文字列を返す
    return ContentService.createTextOutput("");
  } catch (err) {
    Logger.log("doPostエラー: " + err);
    return ContentService.createTextOutput("");
  }
}

//────────────────────────────────────────────
// 次回実行トリガーの設定（既存機能）
//────────────────────────────────────────────
function scheduleNextExecution() {
  // 既存の main 関数のトリガーをすべて削除
  var allTriggers = ScriptApp.getProjectTriggers();
  allTriggers.forEach(function(trigger) {
    if (trigger.getHandlerFunction() === "main") {
      ScriptApp.deleteTrigger(trigger);
    }
  });
  
  var now = new Date();
  var nowMinutes = now.getHours() * 60 + now.getMinutes();
  
  // ターゲット時刻（分換算：7時から21時まで毎時）
  var scheduledMinutes = [];
  for (var hour = 7; hour <= 21; hour++) {
    scheduledMinutes.push(hour * 60);
  }
  var targetTime = new Date(now);
  var found = false;
  
  // 現在時刻より後の最初のターゲット時刻を今日中から探す
  for (var i = 0; i < scheduledMinutes.length; i++) {
    if (nowMinutes < scheduledMinutes[i]) {
      var hour = Math.floor(scheduledMinutes[i] / 60);
      var minute = scheduledMinutes[i] % 60;
      targetTime.setHours(hour, minute, 0, 0);
      found = true;
      break;
    }
  }
  
  // 今日中に該当する時刻がなければ、翌日の7:00に設定
  if (!found) {
    targetTime = new Date(now);
    targetTime.setDate(targetTime.getDate() + 1);
    targetTime.setHours(7, 0, 0, 0);
  }
  
  // 現在時刻とターゲット時刻の差分（ミリ秒）を算出
  var msToWait = targetTime.getTime() - now.getTime();
  
  // 次回の実行トリガーを設定
  ScriptApp.newTrigger("main")
    .timeBased()
    .after(msToWait)
    .create();
  
  Logger.log("次回実行トリガーを " + targetTime.toString() + " に設定しました。");
}

//────────────────────────────────────────────
// メイン実行関数（更新検知 → マスタ更新 → メール通知 → LINE通知）
//────────────────────────────────────────────
function main() {
  // loadConfig()で全設定を読み込む
  loadConfig();
  
  // 「マスタ」シートに実行日時をA1セルに記入
  var masterSheet = getMasterSheet();
  masterSheet.getRange("A1").setValue(new Date());
  
  var newData = [];
  var cookieString = loginAndGetCookies();
  if (!cookieString) {
    Logger.log("ログインに失敗しました。");
    return;
  }
  Logger.log("【fetchPageContent】リクエストに使用する Cookie: " + cookieString);
  
  pages.forEach(function(page) {
    Logger.log("=== 処理開始: " + page.page_name + " ===");
    var pageResponse = fetchPageContent(page.page_url, cookieString);
    if (!pageResponse || !pageResponse.content) {
      Logger.log("ページ取得に失敗: " + page.page_url);
      return;
    }
    var pageContent = extractPageContent(pageResponse.content);
    var effectiveContent = pageContent ? pageContent : pageResponse.content;
    var filteredContent = filterDynamicAttributes(effectiveContent);
    var hash = computeHash(filteredContent);
    Logger.log("【" + page.page_name + "】計算したハッシュ: " + hash);
    
    var headers = pageResponse.headers;
    var etag = headers["ETag"] || headers["etag"] || "";
    var lastModified = headers["Last-Modified"] || headers["last-modified"] || "";
    Logger.log("【" + page.page_name + "】ETag: " + etag);
    Logger.log("【" + page.page_name + "】Last-Modified: " + lastModified);
    
    var title = extractTitle(pageResponse.content);
    
    // 「ログ」シートへの出力
    appendRowToLogSheet(page.page_name, page.page_url, title, hash, "", new Date(), filteredContent);
    
    // マスタ更新用データとして newData に登録
    newData.push({ page_name: page.page_name, hash: hash, page_url: page.page_url });
  });
  
  // マスタシートの更新＋比較（実行日時は各行のD列に記録）
  var updatedPages = updateMasterSheet(newData);
  
  // 更新があればメール送信およびLINEプッシュ通知送信
  if (updatedPages.length > 0) {
    var body = "お茶の水Moodleの以下のページが更新されました\n\n";
    updatedPages.forEach(function(item) {
      body += item.page_name + ": " + item.page_url + "\n";
    });
    sendUpdateEmail(updatedPages);
    sendLinePushNotifications(body);
  }
  
  // 次回実行トリガーを設定
  scheduleNextExecution();
}

//────────────────────────────────────────────
// 最終実行：main() の呼出し（必要に応じて、手動実行またはトリガー設定）
//────────────────────────────────────────────
// main();
