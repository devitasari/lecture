function errorHandler(err) {
    let newErrs = err.errors.map(e => {
        return e.message
    })

    return newErrs
}

module.exports = errorHandler