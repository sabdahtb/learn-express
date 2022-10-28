class Helper {
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    console.log('Hello, ' + this.greeting)
  }
}

export default Helper
