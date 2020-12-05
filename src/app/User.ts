


export class User {
  
    private static instance : User; 

    static ERROR_NAME = "ERROR_NAME_NOT_FOUND";
    nom = User.ERROR_NAME;
    estConn = false;
    estCombat = false;

    public static instanciate() : void {
        User.instance =  User.getDefaultUser();
    }

    public static getInstance() : User {
        if (!User.instance) 
            User.instanciate();

        return User.instance;
    }

  
    constructor(name:string, connState:boolean,isFighter:boolean) {
      this.estConn = connState;
      this.estCombat = isFighter;
      this.nom = name;
    }
  
    public static getDefaultUser():User {
      let estConn = false;
      let nom = User.ERROR_NAME;
      return new User(nom, estConn, false)
    }

    public static getNewUser(name:string, connState:boolean, isFighter:boolean):User { return new User(name, connState, isFighter); }
  
    public estCo():boolean { return this.estConn; }

    public estCombattant():boolean { return this.estCombat; }
  
    public updateNom(nouvNom:string):void { this.nom = nouvNom; }
  
    public getNom():string { return this.nom; }
  
    public changeCo():void { this.estConn = !(this.estConn); }

    public changeComb():void { this.estCombat = !(this.estCombat); }

    public static Update(nom:string, estConn:boolean, estComb:boolean) {
        if (estConn != User.getInstance().estCo())
          User.getInstance().changeCo();
        if (estComb != User.getInstance().estCombattant())
          User.getInstance().changeComb();
        User.getInstance().updateNom(nom);
      }
  }
  