
function EventEmitter() {
    this.listeners = {}
}

EventEmitter.prototype.on = function (e, cb) {
    const listeners = this.listeners
    const eArray = listeners[e]
    if (Array.isArray(eArray)) {
        !eArray.includes(cb) ? eArray.push(cb) : null
        return
    } else {
        listeners[e] = [cb]
    }

}



EventEmitter.prototype.emit = function (e) {
    const args = Array.from(arguments)
    args.shift()
    const ls = this.listeners[e]
    if (!e || !ls || ls.length == 0) return
    ls.forEach(cb => {
        cb(...args)
    })

}

const EE = new EventEmitter()

EE.on("hi", (e) => { console.log(e) })

EE.on("hi", (e) => { console.log(e) })


EE.emit("hi", 1111)