##npm init start

	npm init

可以全部 pass 詢問，採用預設，會在資料夾中建立 package.json 檔案

#####pakcage.json

	{
		"name": "npm-init",
		"version": "1.0.0",
	  	"description": "",
  		"main": "index.js",
	  	"scripts": {
    		"test": "echo \"Error: no test specified\" && exit 1"
  		},
	  	"author": "",
  		"license": "ISC",
	}



##npm install, e.g react

	npm i -S react

i  : install

-S : save install info to package.json , dependencies need


#####執行後顯示

	npm WARN package.json npm-init@1.0.0 No description
	npm WARN package.json npm-init@1.0.0 No repository field.
	npm WARN package.json npm-init@1.0.0 No README data
	react@0.13.3 node_modules/react
	└── envify@3.4.0 (through@2.3.7, jstransform@10.1.0)


異動 pakcage.json

 ```
	{
		"name": "npm-init",
		"version": "1.0.0",
	  	"description": "",
  		"main": "index.js",
	  	"scripts": {
    		"test": "echo \"Error: no test specified\" && exit 1"
  		},
	  	"author": "",
  		"license": "ISC",
	  	"dependencies": {
    		"react": "^0.13.3"
  		}
	}
```

新建 node_modules 資料夾，作為安裝資料夾，並下載 react 到此


