# Git 사용하는 방법



# 프로젝트를 위한 Git 사용방법
* 새로운 프로젝트 시작하기(New Repository)
* 기존 프로젝트 사용하기(git clone)

<br/>

# 새로운 프로젝트 시작하기

git과 github를 사용해서 새로운 프로젝트를 시작하기 위해서는 github에서 새로운 Repository를 생성후, 
local에 가져와서 코드를 작성하면 된다.

<br/>

1. github에서 Repository 생성
- New Repository -> Create a Repository

<br/>
2. local에서 같은 이름의 폴더를 생성한다.(ex) test 폴더) 

```
mkdir test
```

<br/>
3. git이 새로운 폴더를 tracking하게 설정하기

```
git init
```

<br/>
4. test 폴더에 파일 하나 생성하기

```
touch README.md
```

<br/>
5. 생성한 파일을 Git에 추가하기

```
git add README.md
```

<br/>
6. Git에 메세지를 전달하기(commit)

commit 하는 방법은 2가지이다.

- vim 사용해서 commit 하기

```
git commit
```

위와 같이하면, vim이 나타난다.
vim에서 메세지를 작성하기 위해서는
'i' 입력하면 insert mode가 나와 메세지를 입력할 수 있다.

메세지 작성 후, 'ESC'를 입력하면, 
normal mode로 이동한다.
normal mode에서 ':'를 입력후, 
'wq'를 입력하면 저장후, vim을 나가게 된다.
('q'를 입력하면, 저장이 안된다.)

<br/>
- 바로 commit 하기

```
git commit -m "message"
```

마지막에 "를 입력안하고, Enter를 치면,
'>'가 나오면서 계속 메세지를 작성할 수 있다.
메세지 작성을 끝내고 싶으면, 글 마지막에 "를 입력하고, Enter를 치면 된다.

<br/>
7. local에서 수정한 파일들을 보낼 곳의 주소를 입력하기

```
git remote add origin https://github.com/username/repo.git
```

Git에게 파일들을 보낼 곳의 주소를 알려줘야 하기 때문에, 위와 같이 작성을 하고, 프로젝트를 처음으로 생성할 때, 오직 1번만 입력하면 된다.

여기서 origin은 주소의 별명으로써, 주소를 입력하기에는 너무 길어 이와 같이 사용하고, 임의의 이름으로 작성가능하다. 그러나, 관습적으로 origin을 사용한다.

<br/>
8. github(원격 저장소, remote)에 업로드한다.

```
git push origin master
```

origin 주소에 있는 master 브랜치에 업로드한다.

<br/>

# 기존 프로젝트 사용하기

1. local에서 기존 프로젝트를 가져오고 싶은 곳(directory)으로 이동한다.

```
cd dev
```

dev 폴더안에서 모든 프로젝트를 관리하기 때문에, dev에서 새로운 프로젝트를 추가하기 위해 dev로 이동한다.

<br/>
2. github에 있는 기존 프로젝트(repository)를 local로 가져온다.

```
git clone https://github.com/cheonmro/test.git
```

<br/>
3. 가져온 기존 프로젝트 중에서 파일을 수정하고, Git에 추가한다.

```
git add README.md
```

<br/>
4. commit 한다.

clone해서 가져왔을 때는, 
git init 과
git remote add origin {address}
를 할 필요가 없다.

<br/>
5. 수정한 파일들을 업로드한다.

```
git push origin master
```

<br/>

# github를 활용한 블로그 만들기

github 저장소를 활용해서 정적인 사이트(블로그)를 만들 수 있다.

1. github에서 repository를 생성할 때, repository 이름을 다음과 같이 작성하고, repository를 생성한다.

```
username.github.io
```

<br/>
2. 이 저장소를 local에서 가져와(git clone) index.html 파일을 만든다.(임의의 파일)


<br/>
3. index.html 파일을 수정 후, 다음과 같은 명령어를 작성하여 github 저장소에 업로드한다. 
- git add
- git commit
- git push


<br/>
4. 블로그 주소를 입력하여, 확인할 수 있다.

```
https://cheonmro.github.io/
```

<br/>

# branch

master 브랜치는 배포용(deploy)으로 사용하고, 각 기능별로 나눠서 develop용으로 사용하기 위해서는 각 기능별 branch를 생성해서 작업한다.

어떤 기능에 대한 branch 개발이 끝나면, 다음과 같은 순서로 작성하여 github 저장소에 업로드한다.
- git add
- git commit
- git push

<br/>
새로 개발된 기능을 포함하는 branch를 배포용인 master 브랜치에 추가하기 위해서는,

```
git merge stem
```

(stem은 또 다른 branch)

<br/>
이때, master 브랜치에 있는 상태에서 stem 브랜치를 적용해야 한다. 만약 현재 위치가 stem 브랜치에 있다면, master 브랜치로 다음과 같이 이동하면 된다.

```
git checkout master
```