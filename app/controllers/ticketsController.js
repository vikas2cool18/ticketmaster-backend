const Ticket=require('../models/ticket')
const Department=require('../models/department')
const Employee=require('../models/employee')
const Customer=require('../models/customer')

module.exports.list=(req, res)=> {
    Ticket.find().populate('customer').populate('department').populate('employee')
    .then((tickets)=> {
        res.json(tickets)
    })
    .catch((error)=> {
        res.json(error)
    })
}

module.exports.create=(req, res)=> {
    const body=req.body
    const ticket=new Ticket(body)
    ticket.save()
    .then((ticket)=> {
        if(ticket) {
            res.json(ticket)
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
    Ticket.findById(id).populate('customer').populate('department').populate('employee')
    .then((ticket)=> {
        res.json(ticket)
    })
    .catch((error)=> {
        res.json(error)
    })
}

module.exports.update=(req, res)=> {
    const id=req.params.id
    const body=req.body
    Ticket.findByIdAndUpdate(id, body, {new: true, runValidators: true})
    .then((ticket)=> {
        if(ticket) {
            res.json(ticket)
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
    Ticket.findByIdAndDelete(id)
    .then((ticket)=> {
        if(ticket) {
            res.json(ticket)
        } else {
            res.json({})
        }
    })
    .catch((error)=> {
        res.json(error)
    })
}