const testApi = (req, res) => {
    return res.status('200').json({
        message: "ok",
        data: "test",
        id: "1"
    })
}

module.exports = {
    testApi,
}