//────────────────────────────────────────────
// 定数
//────────────────────────────────────────────
var CONSTANTS = {
  LOGIN_URL: "https://moodle.fz.ocha.ac.jp/R7/login/index.php",
  USER_AGENT: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
  PAGES: [
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
  ]
};

const App = {
  loadConfig() {
    const scriptProps = PropertiesService.getScriptProperties();
    const config = {};

    config.USERNAME = scriptProps.getProperty("USERNAME");
    config.PASSWORD = scriptProps.getProperty("PASSWORD");
    if (!config.USERNAME || !config.PASSWORD) {
      throw new Error("USERNAME または PASSWORD が設定されていません。");
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const propSheet = ss.getSheetByName("プロパティ");
    if (!propSheet) {
      throw new Error("プロパティシートがありません。");
    }
    const range = propSheet.getRange("A:B");
    const values = range.getValues();
    let mailStr = null;
    for (let i = 0; i < values.length; i++) {
      if (values[i][0] === "MAIL_RECEIVERS") {
        mailStr = values[i][1];
        break;
      }
    }
    if (!mailStr) {
      throw new Error("MAIL_RECEIVERS の設定がプロパティシートにありません。");
    }
    const emails = mailStr.split(",").map(email => email.trim());
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    emails.forEach(email => {
      if (!emailRegex.test(email)) {
        throw new Error("無効なメールアドレスが設定されています: " + email);
      }
    });
    config.MAIL_RECEIVERS = emails.join(",");

    config.LINE_CHANNEL_ID = scriptProps.getProperty("LINE_CHANNEL_ID");
    config.LINE_CHANNEL_ACCESS_TOKEN = scriptProps.getProperty("LINE_CHANNEL_ACCESS_TOKEN");
    if (!config.LINE_CHANNEL_ID || !config.LINE_CHANNEL_ACCESS_TOKEN) {
      throw new Error("LINE_CHANNEL_ID または LINE_CHANNEL_ACCESS_TOKEN が設定されていません。");
    }

    Logger.log("設定を正常に読み込みました。");
    return config;
  },

  processPage(page, cookieStore) {
    Logger.log(`=== 処理開始: ${page.page_name} ===`);
    const pageResponse = MoodleClient.fetchPageContent(page.page_url, cookieStore);
    if (!pageResponse || !pageResponse.content) {
      Logger.log(`ページ取得に失敗: ${page.page_url}`);
      return null;
    }

    const updatedCookieStore = pageResponse.updatedCookieStore;
    const { content, headers } = pageResponse;

    let pageContent = HtmlProcessor.extractPageContent(content);
    const effectiveContent = pageContent ? pageContent : content;
    const filteredContent = HtmlProcessor.filterDynamicAttributes(effectiveContent);
    const hash = HtmlProcessor.computeHash(filteredContent);
    Logger.log(`【${page.page_name}】計算したハッシュ: ${hash}`);

    const title = HtmlProcessor.extractTitle(content);
    SheetManager.appendRowToLogSheet(page.page_name, page.page_url, title, hash, "", new Date(), filteredContent);

    const newData = { page_name: page.page_name, hash: hash, page_url: page.page_url };
    return { newData, updatedCookieStore };
  },

  scheduleNextExecution() {
    const allTriggers = ScriptApp.getProjectTriggers();
    allTriggers.forEach(trigger => {
      if (trigger.getHandlerFunction() === "main") {
        ScriptApp.deleteTrigger(trigger);
      }
    });

    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const scheduledMinutes = Array.from({length: 15}, (_, i) => (i + 7) * 60); // 7:00 to 21:00

    let targetTime = new Date(now);
    let found = false;

    for (const minute of scheduledMinutes) {
      if (nowMinutes < minute) {
        targetTime.setHours(Math.floor(minute / 60), minute % 60, 0, 0);
        found = true;
        break;
      }
    }

    if (!found) {
      targetTime.setDate(targetTime.getDate() + 1);
      targetTime.setHours(7, 0, 0, 0);
    }

    const msToWait = targetTime.getTime() - now.getTime();
    ScriptApp.newTrigger("main").timeBased().after(msToWait).create();
    Logger.log(`次回実行トリガーを ${targetTime.toString()} に設定しました。`);
  }
};

const CookieUtils = {
  mergeFromHeader(cookies, setCookieHeader) {
    if (!setCookieHeader) return;
    if (Array.isArray(setCookieHeader)) {
      setCookieHeader.forEach(cookieStr => this.processPair(cookies, cookieStr));
    } else {
      this.processPair(cookies, setCookieHeader);
    }
  },

  processPair(cookies, cookieStr) {
    const pair = cookieStr.split(';')[0].split('=');
    const key = pair[0].trim();
    const value = pair[1] ? pair[1].trim() : "";
    cookies[key] = value;
  },

  format(cookies) {
    return Object.keys(cookies).map(key => `${key}=${cookies[key]}`).join("; ");
  }
};

const MoodleClient = {
  fetchLoginPage(cookieStore) {
    const optionsGet = { "headers": { "User-Agent": CONSTANTS.USER_AGENT } };
    const getResponse = UrlFetchApp.fetch(CONSTANTS.LOGIN_URL, optionsGet);
    const getHtml = getResponse.getContentText();
    const tokenRegex = /name="logintoken"[^>]*value="([^"]+)"/;
    const matches = getHtml.match(tokenRegex);
    const logintoken = matches ? matches[1] : "";

    let updatedCookieStore = { ...cookieStore };
    CookieUtils.mergeFromHeader(updatedCookieStore, getResponse.getAllHeaders()["Set-Cookie"]);

    return { logintoken, updatedCookieStore };
  },

  submitLoginForm(config, logintoken, cookieStore) {
    const payload = {
      "username": config.USERNAME,
      "password": config.PASSWORD,
      "logintoken": logintoken,
      "anchor": ""
    };
    const optionsPost = {
      "method": "post",
      "payload": payload,
      "followRedirects": false,
      "contentType": "application/x-www-form-urlencoded",
      "headers": {
        "User-Agent": CONSTANTS.USER_AGENT,
        "Cookie": CookieUtils.format(cookieStore),
        "Referer": CONSTANTS.LOGIN_URL
      }
    };
    const loginResponse = UrlFetchApp.fetch(CONSTANTS.LOGIN_URL, optionsPost);
    const postHeaders = loginResponse.getAllHeaders();

    let updatedCookieStore = { ...cookieStore };
    CookieUtils.mergeFromHeader(updatedCookieStore, postHeaders["Set-Cookie"]);

    return { postHeaders, updatedCookieStore };
  },

  handleLoginRedirect(locationHeader, cookieStore) {
    if (!/^https?:\/\//i.test(locationHeader)) {
      const domainMatch = CONSTANTS.LOGIN_URL.match(/https?:\/\/[^\/]+/i);
      if (domainMatch) { locationHeader = domainMatch[0] + locationHeader; }
    }

    const redirectOptions = {
      "headers": {
        "Cookie": CookieUtils.format(cookieStore),
        "User-Agent": CONSTANTS.USER_AGENT,
        "Referer": CONSTANTS.LOGIN_URL
      },
      "followRedirects": true
    };
    const redirectResponse = UrlFetchApp.fetch(locationHeader, redirectOptions);

    let updatedCookieStore = { ...cookieStore };
    CookieUtils.mergeFromHeader(updatedCookieStore, redirectResponse.getAllHeaders()["Set-Cookie"]);
    return updatedCookieStore;
  },

  accessHomePage(cookieStore) {
    const homeOptions = {
        "headers": {
            "Cookie": CookieUtils.format(cookieStore),
            "User-Agent": CONSTANTS.USER_AGENT,
            "Referer": CONSTANTS.LOGIN_URL
        },
        "followRedirects": true
    };
    const homeResponse = UrlFetchApp.fetch("https://moodle.fz.ocha.ac.jp/R7/", homeOptions);

    let updatedCookieStore = { ...cookieStore };
    CookieUtils.mergeFromHeader(updatedCookieStore, homeResponse.getAllHeaders()["Set-Cookie"]);
    return updatedCookieStore;
  },

  loginAndGetCookies(config, initialCookieStore) {
    let cookieStore = { ...initialCookieStore };
    try {
      const pageData = this.fetchLoginPage(cookieStore);
      cookieStore = pageData.updatedCookieStore;

      const loginData = this.submitLoginForm(config, pageData.logintoken, cookieStore);
      cookieStore = loginData.updatedCookieStore;

      const locationHeader = loginData.postHeaders["Location"];
      if (locationHeader) {
        cookieStore = this.handleLoginRedirect(locationHeader, cookieStore);
      }

      cookieStore = this.accessHomePage(cookieStore);

      Logger.log(`ログイン成功後の最終的なCookie: ${CookieUtils.format(cookieStore)}`);
      return cookieStore;
    } catch (e) {
      Logger.log(`ログイン処理中にエラーが発生しました: ${e}`);
      return null;
    }
  },

  fetchPageContent(url, cookieStore) {
    let newCookieStore = { ...cookieStore };
    const cookieString = CookieUtils.format(newCookieStore);
    const options = {
      "headers": {
        "Cookie": cookieString,
        "User-Agent": CONSTANTS.USER_AGENT
      },
      "followRedirects": true
    };
    try {
      const response = UrlFetchApp.fetch(url, options);
      const headers = response.getAllHeaders();
      CookieUtils.mergeFromHeader(newCookieStore, headers["Set-Cookie"]);
      const content = response.getContentText();
      return { content, headers, updatedCookieStore: newCookieStore };
    } catch(e) {
      Logger.log(`ページ取得エラー: ${e}`);
      return null;
    }
  }
};

const HtmlProcessor = {
  extractPageContent(html) {
    const startIndex = html.indexOf('<div id="region-main-box"');
    if (startIndex === -1) return html;
    const startTagEnd = html.indexOf('>', startIndex);
    if (startTagEnd === -1) return html;
    const contentStart = startTagEnd + 1;
    let openCount = 1;
    let pos = contentStart;
    while (openCount > 0) {
      const nextOpen = html.indexOf('<div', pos);
      const nextClose = html.indexOf('</div>', pos);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        openCount++;
        pos = nextOpen + 4;
      } else {
        openCount--;
        pos = nextClose + 6;
      }
    }

    let content = html.substring(contentStart, pos - 6);
    content = this.removeNavigationElements(content);
    return content;
  },

  removeNavigationElements(content) {
    content = this.removeElementByClass(content, "section-navigation navigationtitle");
    content = this.removeElementByClass(content, "section-navigation mdl-bottom");
    return content;
  },

  removeElementByClass(html, className) {
    const startIndex = html.indexOf(`<div class="${className}`);
    if (startIndex === -1) return html;
    
    const startTagEnd = html.indexOf('>', startIndex);
    if (startTagEnd === -1) return html;
    
    const contentStart = startTagEnd + 1;
    let openCount = 1;
    let pos = contentStart;

    while (openCount > 0) {
      const nextOpen = html.indexOf('<div', pos);
      const nextClose = html.indexOf('</div>', pos);
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
  },

  filterDynamicAttributes(content) {
    content = content.replace(/<script[\s\S]*?<\/script>/gi, '');
    content = content.replace(/\s*id="(?:random[^"]*|down-[^"]*|menu-[^"]*|sessKey[^"]*|list-[^"]*|container-[^"]*|toggle-[^"]*|searchinput-[^"]*|month-[^"]*|navigation-[^"]*|format-[^"]*|url_select[^"]*|single_button[^"]*)"/gi, '');
    content = content.replace(/\s*aria-controls="(?:random[^"]*|down-[^"]*|menu-[^"]*|sessKey[^"]*|list-[^"]*|container-[^"]*|toggle-[^"]*|searchinput-[^"]*|month-[^"]*|navigation-[^"]*|format-[^"]*|url_select[^"]*|single_button[^"]*)"/gi, '');
    content = content.replace(/\s*aria-labelledby="(?:random[^"]*|down-[^"]*|menu-[^"]*|sessKey[^"]*|list-[^"]*|container-[^"]*|toggle-[^"]*|searchinput-[^"]*|month-[^"]*|navigation-[^"]*|format-[^"]*|url_select[^"]*|single_button[^"]*)"/gi, '');
    content = content.replace(/(?:random|down-|menu-|sessKey|list-|container-|toggle-|searchinput-|month-|navigation-|format-|url_select|single_button)[^\n]*/gi, '');
    content = content.replace(/\s*aria-expanded="(?:true|false)"/gi, '');
    content = content.replace(/\s*class="([^"]*)(?:expanded|icons-collapse|collapse|folded|unfolded)([^"]*)"/gi, '');
    content = content.replace(/\s*data-(?:expanded|collapse|folded|unfolded|toggle-state)="[^"]*"/gi, '');
    return content;
  },

  computeHash(content) {
    const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, content);
    return digest.map(byte => {
      let b = byte;
      if (b < 0) { b += 256; }
      const hex = b.toString(16);
      return (hex.length === 1) ? "0" + hex : hex;
    }).join("");
  },

  extractTitle(html) {
    const match = html.match(/<title>([\s\S]*?)<\/title>/i);
    return match ? match[1] : "";
  }
};

const SheetManager = {
  getMasterSheet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("マスタ");
    if (!sheet) {
      sheet = ss.insertSheet("マスタ");
      sheet.clear();
      sheet.getRange("A1").setValue(new Date());
      sheet.appendRow(["page_name", "hash", "isUpdated", "executed_at"]);
      CONSTANTS.PAGES.forEach(page => {
        sheet.appendRow([page.page_name, "", "", ""]);
      });
    }
    return sheet;
  },

  updateMasterSheet(newData) {
    const sheet = this.getMasterSheet();
    sheet.getRange("A1").setValue(new Date());

    const lastRow = sheet.getLastRow();
    const numRows = lastRow - 2;
    if (numRows <= 0) return [];
    const dataRange = sheet.getRange(3, 1, numRows, 4);
    const data = dataRange.getValues();
    const updates = [];
    const checkTime = new Date();

    newData.forEach(item => {
      for (let i = 0; i < data.length; i++) {
        if (data[i][0] === item.page_name) {
          const oldHash = data[i][1];
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
  },

  appendRowToLogSheet(page_name, url, title, hash, emptyStr, timestamp, filteredText) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("ログ");
    if (!sheet) {
      sheet = ss.insertSheet("ログ");
      sheet.clear();
      sheet.appendRow(["page_name", "URL", "title", "hash", "", "書き込み日時"]);
    }
    sheet.appendRow([page_name, url, title, hash, emptyStr, timestamp]);
    Logger.log(`【DEBUG】フィルタ済みテキスト: ${filteredText}`);
  },

  getLineSheet() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("LINE");
    if (!sheet) {
      sheet = ss.insertSheet("LINE");
      sheet.clear();
      sheet.appendRow(["userId", "eventType", "replyToken", "sourceType", "timestamp", "destination", "rawData"]);
    }
    return sheet;
  },

  addLineUser(eventObj) {
    const sheet = this.getLineSheet();
    const userId = eventObj.source.userId;

    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === userId) {
        Logger.log(`既に登録済みのユーザー: ${userId}`);
        return;
      }
    }

    const { type: eventType, replyToken = "", source: { type: sourceType }, timestamp, destination = "" } = eventObj;
    const rawData = JSON.stringify(eventObj);
    sheet.appendRow([userId, eventType, replyToken, sourceType, timestamp, destination, rawData]);
    Logger.log(`LINEユーザーを追加: ${userId}`);
  },

  removeLineUser(userId) {
    const sheet = this.getLineSheet();
    const data = sheet.getDataRange().getValues();
    for (let i = data.length - 1; i >= 1; i--) {
      if (data[i][0] === userId) {
        sheet.deleteRow(i + 1);
        Logger.log(`LINEユーザーを削除: ${userId}`);
      }
    }
  }
};

const LineNotifier = {
  sendPushNotifications(message, config) {
    const sheet = SheetManager.getLineSheet();
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      const userId = data[i][0];
      const success = this.sendPushMessage(userId, message, config);
      if (!success) {
        Logger.log(`LINE通知：3回連続で送信失敗、ユーザー ${userId} への送信は失敗しました。`);
      }
    }
  },

  sendPushMessage(userId, message, config) {
    const url = "https://api.line.me/v2/bot/message/push";
    const payload = {
      "to": userId,
      "messages": [{ "type": "text", "text": message }]
    };
    const options = {
      "method": "post",
      "contentType": "application/json",
      "payload": JSON.stringify(payload),
      "headers": {
        "Authorization": `Bearer ${config.LINE_CHANNEL_ACCESS_TOKEN}`
      },
      "muteHttpExceptions": true
    };

    for (let i = 0; i < 3; i++) {
      try {
        const response = UrlFetchApp.fetch(url, options);
        const responseCode = response.getResponseCode();
        if (responseCode >= 200 && responseCode < 300) {
          Logger.log(`LINEプッシュ通知送信成功: ${userId}`);
          return true;
        }
        Logger.log(`LINEプッシュ通知送信エラー（HTTP ${responseCode}）: ${userId}`);
      } catch(e) {
        Logger.log(`LINEプッシュ通知送信例外: ${e} ユーザー: ${userId}`);
      }
      Utilities.sleep(1000);
    }
    return false;
  },

  sendUpdateEmail(updates, config) {
    if (updates.length === 0) return;
    const subject = "お茶の水Moodle更新のお知らせ";
    let body = "お茶の水Moodleの以下のページが更新されました\n\n";
    updates.forEach(item => {
      body += `${item.page_name}: ${item.page_url}\n`;
    });
    MailApp.sendEmail(config.MAIL_RECEIVERS, subject, body);
    Logger.log("メール送信完了");
  }
};

//────────────────────────────────────────────
// Entry Points for Google Apps Script
//────────────────────────────────────────────
function main() {
  try {
    const config = App.loadConfig();

    const masterSheet = SheetManager.getMasterSheet();
    masterSheet.getRange("A1").setValue(new Date());

    const allNewData = [];
    let cookieStore = MoodleClient.loginAndGetCookies(config, {});
    if (!cookieStore) {
      throw new Error("ログインに失敗しました。処理を中断します。");
    }
    
    for (const page of CONSTANTS.PAGES) {
      const result = App.processPage(page, cookieStore);
      if (result) {
        allNewData.push(result.newData);
        cookieStore = result.updatedCookieStore;
      }
    }
    
    const updatedPages = SheetManager.updateMasterSheet(allNewData);

    if (updatedPages.length > 0) {
      let body = "お茶の水Moodleの以下のページが更新されました\n\n";
      updatedPages.forEach(item => {
        body += `${item.page_name}: ${item.page_url}\n`;
      });
      LineNotifier.sendUpdateEmail(updatedPages, config);
      LineNotifier.sendPushNotifications(body, config);
    }
    
    App.scheduleNextExecution();
  } catch (e) {
    Logger.log(`メイン処理でエラーが発生しました: ${e.stack}`);
    // Optional: Send an error notification
  }
}

function doPost(e) {
  try {
    const config = App.loadConfig();
    const json = JSON.parse(e.postData.contents);
    
    json.events.forEach(eventObj => {
      if (eventObj.type === "follow") {
        SheetManager.addLineUser(eventObj);
      } else if (eventObj.type === "unfollow") {
        SheetManager.removeLineUser(eventObj.source.userId);
      }
    });
  } catch (err) {
    Logger.log(`doPostエラー: ${err}`);
  }
  return ContentService.createTextOutput("");
}
