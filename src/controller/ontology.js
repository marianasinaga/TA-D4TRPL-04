const router = express.Router();
const ontology = require('ontology');

router.get('/wisata', (req, res, next) => {
    let list = new Array();
    let fileName = "TobaBotJson.owl";
    let model;
    try {
        let file = new File(fileName);
        let reader = new FileReader();
        reader.readAsText(file);

        model = ModelFactory.createOntologyModel(OntModelSpec.OWL_DL_MEM);
        var data = ontology.read(fileName);

        while (list.length != null) {
            list.push(data);
        }

        return list;
    } catch (Err) {
        console.log(Err.message);
    }
})