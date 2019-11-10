import {expect} from 'chai';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;

describe('index.html', ()=> {
  it('should say hello', (done) =>{
    //const index = fs.readFileSync('./drivers/views/index.html', 'utf-8');
    const options = { }
    JSDOM.fromFile('./drivers/views/index.html', options).then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal('Hello World')
      done()
    }).catch(done)

  });
});
