// Interfaces são parecidos com tipos, porém mais superficiais e deixam declaram métodos dentro deles.

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
//   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
  // Não precisa usar exatamente a mesma chave aqui dentro da interface, desde que seja do mesmo tipo não há problema
}

// Grande diferença das interfaces para os types é que a interface pode ser aberta novamente para inserir novos campos, os types não
interface User {
    githubToken: string
}

// comportamento parecido com java 
interface Admin extends User {
    role: "admin" | "ta" | "learner" 
}

const lucas: Admin = {
  dbId: 22,
  email: "l@l.com",
  userId: 1,
  githubToken: "github",
  role: "admin",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "lucas", off: 10) => {
    return 10
  }
};

lucas.email = "lb@lb.com";
