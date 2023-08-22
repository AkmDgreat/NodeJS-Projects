const getProducts = (req, res) => {
    console.log(`req.query: ${req.query}`)
    const queryObject = {}
    
    if (req.query.featured) {
        queryObject.featured = req.query.featured
    }
    
    console.log(`queryObject: ${queryObject}`)
    res.status(200).json({ msg: "success"})
}

module.exports = getProducts