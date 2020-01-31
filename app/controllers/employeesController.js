const Employee=require('../models/employee')
const Department=require('../models/department')

module.exports.list=(req, res)=> {
    Employee.find().populate('department')
    .then((employees)=> {
        res.json(employees)
    })
    .catch((error)=> {
        res.json(error)
    })
}

module.exports.create=(req, res)=> {
    const body=req.body
    const employee=new Employee(body)
    employee.save()
    .then((employee)=> {
        if(employee) {
            res.json(employee)
        } else {
            res.json({})
        }
    })
    .catch((error)=> {
        res.json(error)
    })
}

module.exports.show=(req,res)=> {
    const id =req.params.id
    Employee.findById(id).populate('department')
    .then((employee)=> {
        res.json(employee)
    })
    .catch((error)=> {
        res.json(error)
    })
}

module.exports.update=(req, res)=> {
    const id=req.params.id
    const body=req.body
    Employee.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    .then((employee)=> {
        if(employee) {
            res.json(employee)
        } else {
            res.json({})
        }
    })
    .catch((error)=> {
        res.json(error)
    })
}

module.exports.destroy=(req, res)=> {
    const id=req.params.id
    Employee.findByIdAndDelete(id)
    .then((employee)=> {
        if(employee) {
            res.json(employee)
        } else {
            res.json({})
        }
    })
    .catch((error)=> {
        res.json(error)
    })
}