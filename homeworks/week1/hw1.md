# 交作業方式

P1. 通過 Github Classroom 邀請連結加入

P2. Clone repo 到本機端

	git clone https://github.com/Lidemy/mentor-program-3rd-Jillhsu.git

## 交作業

P3. 養成好習慣！永遠在新的 branch上寫作業

1. 新開一個branch：

  	 `git branch 新開的branch名`
2. 切換到新的branch上：

      `git checkout 新開的branch名`

  * （1 & 2 步驟可以透過指令`git checkout -b 新開的branch名`代替）

3. 開始寫作業

4. 寫完一個檔案後可以 add + commit：

  	`git commit -am "commit的名稱"` 
5. 該周作業都完成後，push 到 github 端

  	`git push origin 新開的branch名`

6. 回到 github 上，按下 compare & pull request，隨意打標題跟內容後，按下 create pull request
	
    > 注意：base是master，compare是新開的branch名

7. 到第三期專用[交作業的repository](https://github.com/Lidemy/homeworks-3rd)上的issue建立new issue（須按照正確格式 ex. [Week1] 輸入，否則會被rebot關掉）
	
   > issue內容要貼上剛剛pull作業的網址

8. 等待 Huli 按 merge、刪 branch 和關掉 issue，好了代表作業完成沒問題，這時可以回去本機端 checkout 到 master：
	
    `git checkout master`

9. 把被 merge 後的 master 載下來
	
    `git pull origin master`

10. 刪除本地 branch	

  	`git branch -d 新開的branch名`



