const Symptom = require('../models/user')

module.exports.getSymptoms = () =>{
    async (req, res, next) => {
        Symptom.findOne({
            name: req.body.name
        }, async (err, doc) => {
            if (err) throw err;
            if (doc) res.send("Nothing");
            if (!doc) {
        
    
                const newSymptom = new Symptom({
                    name: req.body.name,
                });
                const user = {
                    name: req.body.name
                }
                await newSymptom.save();
                console.log("Symptom Created");
            }
        });
    }
}

module.exports.symptomDetails = async (req, res, next) => {
    console.log(req.body)
    const symptom = await Symptom.findById(req.user.id);
    const symptomData = new SymptomData(req.body);
    symptomData.name = user.name;
    userres = await userData.save();

    console.log(req.user)
    res.send('success')
    req.flash('success', 'Details added');
}