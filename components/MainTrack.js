import React from 'react'
import mainlappy from '../Assets/main-lappy.gif'
export default function MainTrack() {
  return (
    <div className='main-track'>

      <h1>Here's Where You can upload your Project Details</h1>
 

      <img src={mainlappy} alt ="sample-image"></img>
        
			<div className="inner">
				<form action="">

					<h3>DashBoard</h3>
					<div className="form-row">
						<div className="form-wrapper">
							<label >Name *</label>
							<input type="text" className="form-control" placeholder="Project Name"/>
						</div>
						<div className="form-wrapper">
							<label >Status *</label>
							<input type="text" className="form-control" placeholder="Project Status"/>
						</div>
					</div>
					
					<div class="form-row">
						<div class="form-wrapper">
							<label for="">Level*</label>
							<input type="text" class="form-control" />
						</div>
						<div class="form-wrapper">
							<label for="">Team Name</label>
							<input type="text" class="form-control" />
						</div>
					</div>
						
					
					

          <div className="form-wrapper">
            <label>Upload Your Project file:</label> <input type="file" /><br/>
          </div>


					<button data-text="Upload Now">
						<span>Upload</span>
					</button>


				</form>
			</div>
      </div>
  )
}
