const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootl7own/",
            name: "springbootl7own",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootl7own/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "家具销售电商平台"
        } 
    }
}
export default base
