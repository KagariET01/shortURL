# shortURL 讓訊息中的URL縮短

目前支援將x.com轉換成fxtwitter，以及將youtube分享網址後面的feature=shared移除

# 架設方法

1. 修改 `cfg_example.json` 中的設定
	1. 將 `discord bot token` 複製到 `token` 欄位中
	1. 將自己的 `userid` 複製到 `userid` 欄位中
		- p.s. 是 `id` ，而非 `username` ， `id` 應該是一串隨機生成的數字
	1. 若你同時使用imbot，請將 `using_imbot` 設為 `true`，反之則設為 `false`
		- 目前已知兩程式同時啟用會有一些相容性問題，暫時以此方式解決
		- ~~看我之後要不要來徹底解決這個相容性問題~~
1. 將 `cfg_example.json` 重新命名（或複製）為 `cfg.json`
1. 執行 `run.sh`
	- p.s. 若非linux系統，請把檔案中的指令複製出來，自行貼在終端機中執行
