import apiUserService from '../service/apiUserService';
const testApi = (req, res) => {
    return res.status('200').json({
        message: "ok",
        data: "test",
        id: "1"
    })
}
const handleRegister =async (req, res) => {
    try {
        if (!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: "Missing required parameter",
                EC: "1",
                DT: ""
            });
        }

        if(req.body.password && req.body.password.length < 3) {
            return res.status(200).json({
                EM: "Password must be greater than 3 characters",
                EC: '1',
                DT: ""
            });
        }

        let data = await apiUserService.registerNewUser(req.body);

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: ""
        });
    } catch (err) {
        return res.status(500).json({
            EM: "error from handleRegister",
            EC: "-1",
            DT: ""
        });
    }
}

module.exports = {
    testApi, handleRegister,
}