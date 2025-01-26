document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".option");
  const selectedOptionTitle = document.getElementById("selectedOptionTitle");
  const selectedOptionDetails = document.getElementById("selectedOptionDetails");
  const searchForm = document.querySelector(".search-form");

  // Handle click on each option
  options.forEach(option => {
      option.addEventListener("click", function () {
          const optionId = option.id;

          // Update title and description based on selected option
          switch (optionId) {
              case "flights":
                  selectedOptionTitle.textContent = "Flights";
                  selectedOptionDetails.textContent = "Book International and Domestic Flights";
                  searchForm.innerHTML = `
                      <div class="form-group from">
                          <label>From</label>
                          <div class="city-input">
                              <h2>Delhi</h2>
                              <p>DEL, Delhi Airport India</p>
                          </div>
                      </div>
                      <div class="swap-icon">⇄</div>
                      <div class="form-group to">
                          <label>To</label>
                          <div class="city-input">
                              <h2>Bengaluru</h2>
                              <p>BLR, Bengaluru International Airport</p>
                          </div>
                      </div>
                      <div class="form-group departure">
                          <label>Departure</label>
                          <div class="date-input">
                              <h2>27</h2>
                              <div>
                                  <span>Jan'25</span>
                                  <p>Monday</p>
                              </div>
                          </div>
                      </div>
                      <div class="form-group return">
                          <label>Return</label>
                          <div class="date-input empty">
                              <p>Tap to add a return date for bigger discounts</p>
                          </div>
                      </div>
                      <div class="form-group travelers">
                          <label>Travellers & Class</label>
                          <div class="traveler-input">
                              <h2>1</h2>
                              <div>
                                  <span>Traveller</span>
                                  <p>Economy/Premium Economy</p>
                              </div>
                          </div>
                      </div>
                  `;
                  break;

              case "forex":
                  selectedOptionTitle.textContent = "Forex Card & Currency";
                  selectedOptionDetails.textContent = "Select your desired currency and exchange rate";
                  searchForm.innerHTML = `
                      <div class="form-group from">
                          <label>From Currency</label>
                          <div class="currency-input">
                              <select>
                                  <option value="INR">INR</option>
                                  <option value="USD">USD</option>
                                  <option value="EUR">EUR</option>
                                  <!-- Add more currencies here -->
                              </select>
                          </div>
                      </div>
                      <div class="form-group to">
                          <label>To Currency</label>
                          <div class="currency-input">
                              <select>
                                  <option value="INR">INR</option>
                                  <option value="USD">USD</option>
                                  <option value="EUR">EUR</option>
                                  <!-- Add more currencies here -->
                              </select>
                          </div>
                      </div>
                  `;
                  break;

              case "cabs":
                  selectedOptionTitle.textContent = "Cabs";
                  selectedOptionDetails.textContent = "Book cabs for your travel";
                  searchForm.innerHTML = `
                      <div class="form-group from">
                          <label>Pickup Location</label>
                          <div class="city-input">
                              <h2>Delhi</h2>
                              <p>Choose your pickup location</p>
                          </div>
                      </div>
                      <div class="form-group to">
                          <label>Destination</label>
                          <div class="city-input">
                              <h2>Bengaluru</h2>
                              <p>Choose your destination</p>
                          </div>
                      </div>
                      <div class="form-group travelers">
                          <label>Number of Travelers</label>
                          <div class="traveler-input">
                              <h2>1</h2>
                              <div>
                                  <span>Traveler</span>
                                  <p>Select number of travelers</p>
                              </div>
                          </div>
                      </div>
                  `;
                  break;

              // Add more cases for other options like Hotels, Trains, etc.

              default:
                  selectedOptionTitle.textContent = "Select an option";
                  selectedOptionDetails.textContent = "Please select an option from above.";
                  break;
          }
      });
  });
});
