const Input = (name) => {
    if (name === undefined) {
        name = 'Unknown'
    }
    if (name.startsWith(' ') || name.endsWith(' ')) {
        name = name.trim()
    }
    if (name.includes('_')) {
        console.log('contain _')
        name = name.replace(/_/g, '')
    }
    if (name.length > 10) {
        name = name.substring(0, 10)
    }

    return name
}

module.exports = Input