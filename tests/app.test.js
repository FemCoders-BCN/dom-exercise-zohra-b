import {describe ,expect, it, beforeAll} from 'vitest'
import {JSDOM} from 'jsdom'


describe('APP',()=>{
    let dom;
    beforeAll(async () => {
        dom = await JSDOM.fromFile("index.html", {
          resources: "usable",
          runScripts: "dangerously",
        });
      });

      it("should render font-awesome", async () => {
        let document = dom.window.document;
        let link = document.querySelector('link[rel="stylesheet"]');
        expect(link.href).toMatch("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css")
      });

     

      it("should contain a red button to select red color", ()=>{
        expect(document.getElementById("rojo")).toBeDefined();
      }
      )

      it("should contain a gray button to select the gray color", () => {
        expect(document.getElementById("gris")).toBeDefined();
      }
      )

      it("should contain a button to select black color", () => {
        expect(document.getElementById("negro")).toBeDefined();
      }

      )
})

