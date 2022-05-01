class HelloController{
    async index(req, res){
       return res.json({"hello":"world do Controller"});
    }
}

export default new HelloController();