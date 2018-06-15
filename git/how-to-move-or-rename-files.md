# How to Move or Rename files using git

```
git mv oldFile newFile
```

<br>

Terminal에서 자기가 현재 있는 위치를 기준으로(상대적 경로)
- oldFile: 이름을 바꿀 파일(위치) 또는 이동할 파일(위치), 또는 이름도 바꾸고 이동도 하고 싶은 파일(위치)
- newFile: 새로운 이름의 파일(위치) 또는 새롭게 이동할 위치, 또는 새롭게 이동할 위치에서 새로운 이름의 파일

<br>

```
// 위 1줄의 코드와 아래 3줄의 코드와 동일하다.
mv oldFile newFile
git rm oldFile
git add newFile
```

<br>

위와 같이 코드를 작성하게 되면, 아래와 같이 된다.

```
renamed: oldFile -> newFile
```

<br>

## 예시

예를 들어, test라는 directory에 practice라는 폴더가 있고, 그 폴더안에 index.html의 파일이 있다고 해보자.

현재 위치는 test라는 directory 안에 있다고 해보자.

<br>

## 파일의 이름만 바꿀 경우(index.html -> daily.html)

```
git mv ./practice/index.html ./practice/daily.html
```

<br>

## 파일을 이동만 시킬 경우(daily.html -> practice 폴더 밖인 test directory로 이동)

```
git mv ./practice/daily.html ./daily.md
```

<br>

## 파일의 이름을 바꾸고, 새로운 위치로 이동시킬 경우(test directory에 있는 daily.html -> index.html로 이름을 바꾸고, practice 폴더 안으로 이동)

```
git mv ./daily.md ./practice/index.html
```