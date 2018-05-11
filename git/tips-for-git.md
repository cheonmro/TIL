## master 브랜치가 있는 상태에서, 새로운 브랜치를 생성한다면?

새로운 브랜치를 생성하면, master 브랜치에 있던 모든 파일이 포함되어 만들어진다. 예를 들어, develop 이라는 새로운 브랜치를 생성하게 되면, master 브랜치에서 만들어진 모든 파일들이 develop 브랜치안에 자동으로 포함된다.

<br/>

## 두 브랜치 사이에서 merge 하는 방법
- master / develop 두 브랜치 존재한다고 하면,
- 먼저 develop 브랜치에서 새로운 기능(파일)을 추가한 뒤, add / commit / push를 하여 github에서의 develop 브랜치를 수정한다.
- master 브랜치에서 develop에서 새로 수정된 기능을 적용하기 위해, master 브랜치로 이동한다.
```
git checkout master
```
- master 브랜치에서 develop에서 새로 수정된 기능을 적용하기 위해 merge 한다.
```
git merge develop
```
- github에 push 한다.
```
git push origin master
```

이렇게 하면, develop 브랜치에서 만들어진 새로운 기능(파일)들이 모두 master 브랜치에 적용이 된다.
