# ocha_moodle_update_checker
お茶の水女子大附属小　Moodleのデータ更新チェッカー

# 使い方
1. プロパティ　タブを作成
2. A2にMAIL_RECEIVERSと入力
3. B2に受信者のメールアドレスをカンマ区切りで入力
4. scriptをGAS editorに貼り付け
5. script propertiesを設定
    USERNAME:MoodleのID
    PASSWORD:Moodleのパスワード
    LINE_CHANNEL_ID:LINE_CHANNEL_ID
    LINE_CHANNEL_ACCESS_TOKEN:LINE CHANNELのアクセストークン
6. 実行する

初回実行は全データが更新対象として認識されるので、全ページ更新、としてメールが飛びます。