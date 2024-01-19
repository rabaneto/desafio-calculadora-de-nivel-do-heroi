class person{
    constructor(name, races, age, attack){
        this.name = name
        this.races = races
        this.age = age  
        this.attack = attack
    }
    acess(){
        console.log(`o ${(this.races)} atacou usando ${(this.attack)}`)
    }
}

let mago = new person("Gandalf", "mago", "desconhecida", "magia de fogo")
let guerreiro = new person("Aragorn", "guerreiro", "35", "Espada mágica" )
let elfo = new person("Legolas", "Elfo", "desconhecida", "Arco dos elfos da floresta negra")
let monge = new person("jet", "monge", "600", "Palma de buda")
let ninja = new person("Shawn", "ninja", "25", "dardos envenenados")
let anao = new person("Gimli", "Anão", "50", "martelo ancião")

mago.acess()
guerreiro.acess()
elfo.acess()
monge.acess()
ninja.acess()
anao.acess()