(function() {
    // Create the dashboard button
    function createDashboardButton() {
      const button = document.createElement('button');
      button.id = 'crm-exec-dashboard-btn';
      button.innerHTML = 'Executive Dashboard';
      button.className = 'crm-dashboard-button';
      button.addEventListener('click', toggleDashboard);
      document.body.appendChild(button);
    }
  
    // Create the dashboard overlay
    function createDashboardOverlay() {
      const overlay = document.createElement('div');
      overlay.id = 'crm-exec-dashboard-overlay';
      overlay.className = 'dashboard-overlay';
      overlay.style.display = 'none';
      
      //Dashboard content
      overlay.innerHTML = `
        <div class="dashboard-container">
          <div class="dashboard-header">
            <h1>Executive Dashboard</h1>
            <p>High-level performance metrics and trend analysis for decision makers</p>
            <button id="close-dashboard-btn" class="close-button">×</button>
          </div>
          
          <div class="metrics-row">
            <div class="metric-card">
              <h3>Total Collections</h3>
              <div class="metric-value">$2.45M</div>
              <div class="metric-change positive">+15%</div>
            </div>
            
            <div class="metric-card">
              <h3>Recovery Rate</h3>
              <div class="metric-value">58%</div>
              <div class="metric-change positive">+8%</div>
            </div>
            
            <div class="metric-card">
              <h3>Avg Resolution Time</h3>
              <div class="metric-value">18 days</div>
              <div class="metric-change negative">-22%</div>
            </div>
            
            <div class="metric-card">
              <h3>Customer Satisfaction</h3>
              <div class="metric-value">4.2/5</div>
              <div class="metric-change positive">+0.5</div>
            </div>
          </div>
          
          <div class="chart-container">
      <h3>AI-Assisted Collections vs Traditional Collections</h3>
      <div class="chart">
        <div class="bar-container">
          <div class="bar" style="height: 80px; background-color: #4CAF50;">40%</div>
          <div class="month-label">Jan</div>
        </div>
        <div class="bar-container">
          <div class="bar" style="height: 120px; background-color: #3F51B5;">60%</div>
          <div class="month-label">Feb</div>
        </div>
        <div class="bar-container">
          <div class="bar" style="height: 160px; background-color: #FFC107;">80%</div>
          <div class="month-label">Mar</div>
        </div>
        <div class="bar-container">
          <div class="bar" style="height: 200px; background-color: #F44336;">100%</div>
          <div class="month-label">Apr</div>
        </div>
        <div class="bar-container">
          <div class="bar" style="height: 100px; background-color: #9C27B0;">50%</div>
          <div class="month-label">May</div>
        </div>
        <div class="bar-container">
          <div class="bar" style="height: 140px; background-color: #00BCD4;">70%</div>
          <div class="month-label">Jun</div>
        </div>
      </div>
    </div>
  </div>
      `;

   
      
      document.body.appendChild(overlay);
      
      // Add close button event listener
      document.getElementById('close-dashboard-btn').addEventListener('click', function() {
        overlay.style.display = 'none';
      });
    }
  
    //Toggle dashboard visibility
    function toggleDashboard() {
      const overlay = document.getElementById('crm-exec-dashboard-overlay');
      if (overlay.style.display === 'none') {
        overlay.style.display = 'block';
      } else {
        overlay.style.display = 'none';
      }
    }

    // Initialize extension
    function init() {
      createDashboardButton();
      createDashboardOverlay();
    }
  
    // Run initialization when the DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();