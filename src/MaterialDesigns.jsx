
import "beercss";
import "material-dynamic-colors";
function MaterialDesigns() {

  return (
    <>

      <div className='flex flex-col gap-2 '>

        <progress class="wavy"></progress>

        <nav class="group split">
          <button class="left-round">
            <i>add_circle</i>
            <span>Button</span>
          </button>
          <button class="right-round square">
            <i>keyboard_arrow_down</i>
          </button>
        </nav>



        <fieldset>
          <legend>Fill all fields</legend>
          <div class="field border label ring-0 border-0">
            <input/>
              <label>Input</label>
          </div>
          <div class="field border label border-0">
            <select>
              <option>Item 1</option>
              <option>Item 2</option>
              <option>Item 3</option>
            </select>
            <label>Select</label>
          </div>
          <div class="field border label textarea border-0" >
            <textarea></textarea>
            <label>Textarea</label>
            <span class="helper">Helper text</span>
          </div>
        </fieldset>
      </div>



    </>
  )
}

export default MaterialDesigns
