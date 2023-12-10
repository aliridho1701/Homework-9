const errorHandler = (err, req, res, next)=>{
    if(err.name === 'notFound'){
        res.status(404).json({massage: 'notFound'})
    }
}

module.exports = errorHandler