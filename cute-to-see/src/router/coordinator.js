export const goToLogin = (history) => {
    history.push('/login')
}
  
export const goToSignUp = (history) => {
    history.push('/signup')
}
  
export const goToFeed = (history) => {
    history.push("/feed")
}
  
export const goToImage = (history, id) => {
    history.push(`/image/${id}`)
}

export const goToPostImage = (history, id) => {
    history.push(`/image/PostImage`)
}

export const logout = (history) => {
    window.localStorage.clear();
    history.push("/login");
  };

export const goBack = (history) => {
    history.goBack()
};