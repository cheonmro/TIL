# How to change commit messages

# Most recent commit

## Not pushed + most recent commit:

```
git commit --amend
```

This will open your $EDITOR and let you change the message. Continue with your usual git push origin master.

<br>

## Already pushed + most recent commit:

```
git commit --amend
git push origin master --force
```

We edit the message like just above. But need to '--force' the push to update the remote history.

But! Force pushing your commit after changing it will very likely prevent others to sync with the repo, if they already pulled a copy. You should first check with them.

<br>

## $EDITOR

```
git commit --amend
```

위와 같이 하면 에디터가 나온다.

<br>

에디터에서 커밋 메세지를 변경하고, 저장하기
- 에디터를 작성하기 위해, 'i' 입력한다.(insert)
- 에디터에서 메세지 내용을 바꾼다.
- 바꾼 메세지 내용을 저장하고 에디터에서 나가기 위해, 

```
esc -> ':' -> 'wq' -> 'enter'
```

<br>

깃헙에 최종적으로 push 하기 위해,

```
git push origin master --force
```
<br>

# Old commit

## Not pushed + old commit:

```
git rebase -i HEAD~X
# X is the number of commits to go back
# Move to the line of your commit, change pick into edit,
# then change your commit message:
git commit --amend
# Finish the rebase with:
git rebase --continue
```

Rebase opened your history and let you pick what to change. With edit you tell you want to change the message. Git moves you to a new branch to let you --amend the message. git rebase --continue puts you back in your previous branch with the message changed.

<br>

## Already pushed + old commit:

Edit your message with the same 3 steps process as above (rebase -i, commit --amend, rebase --continue). Then force push the commit:

```
git push origin master --force
```

But! Remember re-pushing your commit after changing it will very likely prevent others to sync with the repo, if they already pulled a copy. You should first check with them.