class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width
        this.height = height
        this.content = []

        for (let y = 0; y < height; y += 1) {
            for (let x = 0; x < width; x += 1) {
                this.content[y * width + x] = element(x, y)
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x]
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0
        this.y = 0
        this.matrix = matrix
    }

    next() {
        if (this.y === this.matrix.height) return { done: true }

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        }

        this.x += 1

        if (this.x === this.matrix.width) {
            this.x = 0
            this.y += 1
        }

        return { value, done: false }
    }
}

Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this)
}

// let matrix = new Matrix(2,2, (x, y) => [x, y])

// for (let { x, y, value } of matrix) {
//     console.log(x, y, value)
// }

// console.log('matrix:')
// console.log(matrix)

/**
  * To initialize a SymmetricMatrix instance, the constructor calls
  * its superclass’s constructor through the super keyword. This is
  * necessary because if this new object is to behave (roughly) like
  * a Matrix, it is going to need the instance properties that matrices
  * have.
  * 
  * To ensure the matrix is symmetrical, the constructor wraps
  * the content method to swap the coordinates for values below
  * the diagonal.
  * 
  * The set method again uses super but this time not to call the
  * constructor but to call a specific method from the superclass’s set
  * of methods. We are redefining set but do want to use the original
  * behavior. Because `this.set` refers to the new set method, calling that
  * wouldn’t work. Inside class methods, super provides a way to call
  * methods as they were defined in the superclass.
  */
class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x)
            else return element(x, y)
        })
    }

    set(x, y, value) {
        // super provides way to call methods defined in superclass
        super.set(x, y, value)

        if (x !== y) {
            super.set(y, x, value)
        }
    }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`)

console.log(matrix.get(2, 3))
console.log(matrix.get(4, 4))
console.log(matrix.get(1, 4))