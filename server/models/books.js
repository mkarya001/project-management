module.exports = function() { 
    const bookDetails = {};

    bookDetails.get =  (req, res, next) => {
      res.json({data: "its books"})
    }

    return bookDetails;
}