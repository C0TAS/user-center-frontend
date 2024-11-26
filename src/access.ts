/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  // 打印 currentUser 和 userRole 的值
  // console.log('currentUser:', currentUser);
  // console.log('currentUser.userRole:', currentUser?.userRole);
  //
  // const canAdmin = currentUser && currentUser.userRole === 1;
  // console.log('canAdmin:', canAdmin)
  return {
    canAdmin: currentUser && currentUser.userRole === 1
  };
}
