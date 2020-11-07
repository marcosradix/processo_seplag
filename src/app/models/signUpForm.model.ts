export class SignUpForm{
    constructor(
    public  name:String,
    public  username:String,
    public  email:String,
    public role:Set<String>,
    public password:String
    ){}
}