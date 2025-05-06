const expr = require('express')
const router = expr.Router()

const data = [
    { id: 101, name: 'ABCD', branch: 'CE', city: 'surat' },
    { id: 102, name: 'Def', branch: 'IT', city: 'baroda' },
    { id: 103, name: 'ghi', branch: 'CSE', city: 'ahmedabad' },
    { id: 104, name: 'jkl', branch: 'CE', city: 'surat' }]

router.get('/', (req, res) => {
    res.set('content-type', 'text/html')
    for (i of data) {
        res.write(`<h3>id:${JSON.stringify(i.id)}, Name: ${i.name}, Branch: ${i.branch}, C0ity: ${i.city}</h3>`)
    }
    res.send()
})

router.get('/id/:id', (req, res) => {
    const id = Number(req.params.id)
    if (!Number.isInteger(id)) return res.send('Invalid ID')
    var current_data = data.filter((i1) => {
        if (i1.id == req.params.id) {
            return true;
        }
    })

    if (current_data.length == 1) {
        res.send(current_data)
    } else {
        res.send('Not Found')
    }
})

router.get('/branch/:branch', (req, res) => {
    var current_data = data.filter((b) => {
        b1 = b.branch.toLowerCase()
        if (b1 == req.params.branch) {
            return true;
        }
    })
    if (current_data.length >= 1) {
        res.send(current_data)
    } else {
        res.send('Not Found')
    }
})

module.exports = router;