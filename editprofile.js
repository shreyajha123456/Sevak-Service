document.addEventListener('DOMContentLoaded', function() {
    // Tab navigation for profile sections
    const navItems = document.querySelectorAll('.profile-nav-item');
    const profileSections = document.querySelectorAll('.profile-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            profileSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById(sectionId).classList.add('active');
        });
    });
    
    // Profile image upload preview
    const profileImageUpload = document.getElementById('profileImageUpload');
    const profileImage = document.getElementById('profileImage');
    
    if (profileImageUpload && profileImage) {
        profileImageUpload.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImage.src = e.target.result;
                }
                reader.readAsDataURL(file);
                
                // Show success message
                showToast('Profile picture updated successfully!', 'success');
            }
        });
    }
    
    // Save buttons functionality
    const saveButtons = document.querySelectorAll('.btn-primary[id^="save"]');
    
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real application, you would handle form submission and data persistence here
            const sectionId = this.id.replace('save', '');
            showToast(`${sectionId} updated successfully!`, 'success');
        });
    });
    
    // Add new experience button
    const addExperienceBtn = document.getElementById('addNewExperience');
    
    if (addExperienceBtn) {
        addExperienceBtn.addEventListener('click', function() {
            const experienceList = document.querySelector('.experience-list');
            
            // Create new experience item
            const newExperience = document.createElement('div');
            newExperience.className = 'experience-item';
            newExperience.innerHTML = `
                <div class="experience-header">
                    <h4>New Position</h4>
                    <div class="experience-actions">
                        <button type="button" class="btn-text btn-edit"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn-text btn-delete"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <p class="experience-company">Company Name</p>
                <p class="experience-duration">Start Date - End Date</p>
                <p class="experience-description">Job description goes here...</p>
            `;
            
            experienceList.appendChild(newExperience);
            
            // Add event listeners to new buttons
            setupExperienceItemListeners(newExperience);
            
            // Show form to edit the new experience (in a real application)
            showToast('New experience added. Please update the details.', 'info');
        });
    }
    
    // Add new certification button
    const addCertificationBtn = document.getElementById('addNewCertification');
    
    if (addCertificationBtn) {
        addCertificationBtn.addEventListener('click', function() {
            const certificationList = document.querySelector('.certification-list');
            
            // Create new certification item
            const newCertification = document.createElement('div');
            newCertification.className = 'experience-item';
            newCertification.innerHTML = `
                <div class="experience-header">
                    <h4>New Certification</h4>
                    <div class="experience-actions">
                        <button type="button" class="btn-text btn-edit"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn-text btn-delete"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <p class="experience-company">Institution Name</p>
                <p class="experience-duration">Year</p>
            `;
            
            certificationList.appendChild(newCertification);
            
            // Add event listeners to new buttons
            setupExperienceItemListeners(newCertification);
            
            // Show form to edit the new certification (in a real application)
            showToast('New certification added. Please update the details.', 'info');
        });
    }
    
    // Set up listeners for experience items
    function setupExperienceItemListeners(item) {
        const deleteBtn = item.querySelector('.btn-delete');
        const editBtn = item.querySelector('.btn-edit');
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to delete this item?')) {
                    item.remove();
                    showToast('Item deleted successfully.', 'success');
                }
            });
        }
        
        if (editBtn) {
            editBtn.addEventListener('click', function() {
                // In a real application, you would show a form to edit the experience
                // For this example, we'll just show a toast notification
                showToast('Edit functionality would be implemented in a real application.', 'info');
            });
        }
    }
    
    // Set up listeners for all existing experience items
    document.querySelectorAll('.experience-item').forEach(item => {
        setupExperienceItemListeners(item);
    });
    
    // Add new service button
    const addServiceBtn = document.getElementById('addNewService');
    
    if (addServiceBtn) {
        addServiceBtn.addEventListener('click', function() {
            const serviceList = document.querySelector('.service-pricing');
            
            // Create new service item
            const newService = document.createElement('div');
            newService.className = 'pricing-item';
            newService.innerHTML = `
                <div class="pricing-header">
                    <span>New Service</span>
                    <div class="pricing-actions">
                        <button type="button" class="btn-text btn-edit"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn-text btn-delete"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                <div class="pricing-body">
                    <div class="price-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Starting Price</label>
                                <input type="number" value="0" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Unit</label>
                                <select class="form-control">
                                    <option value="fixed" selected>Fixed Price</option>
                                    <option value="hourly">Per Hour</option>
                                    <option value="daily">Per Day</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            serviceList.appendChild(newService);
            
            // Add event listeners to new buttons
            setupServiceItemListeners(newService);
            
            // Show form to edit the new service (in a real application)
            showToast('New service added. Please update the details.', 'info');
        });
    }
    
    // Set up listeners for service items
    function setupServiceItemListeners(item) {
        const deleteBtn = item.querySelector('.btn-delete');
        const editBtn = item.querySelector('.btn-edit');
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                if (confirm('Are you sure you want to delete this service?')) {
                    item.remove();
                    showToast('Service deleted successfully.', 'success');
                }
            });
        }
        
        if (editBtn) {
            editBtn.addEventListener('click', function() {
                // In a real application, you would show a form to edit the service
                const serviceName = prompt('Enter service name:');
                if (serviceName) {
                    item.querySelector('.pricing-header span').textContent = serviceName;
                    showToast('Service updated successfully.', 'success');
                }
            });
        }
    }
    
    // Set up listeners for all existing service items
    document.querySelectorAll('.pricing-item').forEach(item => {
        setupServiceItemListeners(item);
    });
    
    // Document upload functionality
    const documentUpload = document.getElementById('documentUpload');
    
    if (documentUpload) {
        documentUpload.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const documentsGrid = document.querySelector('.documents-grid');
                const uploadCard = document.querySelector('.document-upload-card');
                
                // Create new document card
                const newDocumentCard = document.createElement('div');
                newDocumentCard.className = 'document-card';
                newDocumentCard.innerHTML = `
                    <div class="document-header">
                        <h4>${file.name.split('.').slice(0, -1).join('.')}</h4>
                        <span class="badge pending">Pending</span>
                    </div>
                    <div class="document-preview">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <div class="document-footer">
                        <span class="document-filename">${file.name}</span>
                        <div class="document-actions">
                            <button type="button" class="btn-text"><i class="fas fa-download"></i></button>
                            <button type="button" class="btn-text"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                `;
                
                // Insert new document card before the upload card
                documentsGrid.insertBefore(newDocumentCard, uploadCard);
                
                // Set up delete button
                const deleteBtn = newDocumentCard.querySelector('.fa-trash').parentElement;
                deleteBtn.addEventListener('click', function() {
                    if (confirm('Are you sure you want to delete this document?')) {
                        newDocumentCard.remove();
                        showToast('Document deleted successfully.', 'success');
                    }
                });
                
                showToast('Document uploaded successfully. It will be verified shortly.', 'success');
            }
        });
    }
    
    // Work sample upload functionality
    const workSampleUpload = document.getElementById('workSampleUpload');
    
    if (workSampleUpload) {
        workSampleUpload.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const workSamplesGrid = document.querySelector('.work-samples-grid');
                const uploadCard = document.querySelector('.work-sample-upload');
                
                // Read the file and create new work sample
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Create new work sample
                    const newWorkSample = document.createElement('div');
                    newWorkSample.className = 'work-sample';
                    newWorkSample.innerHTML = `
                        <img src="${e.target.result}" alt="Work Sample">
                        <div class="work-sample-actions">
                            <button type="button" class="btn-text"><i class="fas fa-trash"></i></button>
                        </div>
                    `;
                    
                    // Insert new work sample before the upload card
                    workSamplesGrid.insertBefore(newWorkSample, uploadCard);
                    
                    // Set up delete button
                    const deleteBtn = newWorkSample.querySelector('.fa-trash').parentElement;
                    deleteBtn.addEventListener('click', function() {
                        if (confirm('Are you sure you want to delete this work sample?')) {
                            newWorkSample.remove();
                            showToast('Work sample deleted successfully.', 'success');
                        }
                    });
                }
                reader.readAsDataURL(file);
                
                showToast('Work sample uploaded successfully.', 'success');
            }
        });
    }
    
    // Update password functionality
    const updatePasswordBtn = document.getElementById('updatePassword');
    
    if (updatePasswordBtn) {
        updatePasswordBtn.addEventListener('click', function() {
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (!currentPassword || !newPassword || !confirmPassword) {
                showToast('Please fill in all password fields.', 'error');
                return;
            }
            
            if (newPassword !== confirmPassword) {
                showToast('New passwords do not match.', 'error');
                return;
            }
            
            // In a real application, you would validate the current password
            // and update the password in the database
            
            // Clear the password fields
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
            
            showToast('Password updated successfully.', 'success');
        });
    }
    
    // Deactivate account functionality
    const deactivateAccountBtn = document.getElementById('deactivateAccount');
    
    if (deactivateAccountBtn) {
        deactivateAccountBtn.addEventListener('click', function() {
            const confirmation = confirm('Are you sure you want to deactivate your account? This action cannot be undone.');
            
            if (confirmation) {
                // In a real application, you would send a request to deactivate the account
                showToast('Account deactivation request has been sent.', 'info');
            }
        });
    }
    
    // Toast notification system
    function showToast(message, type = 'info') {
        // Check if toast container exists, if not create it
        let toastContainer = document.querySelector('.toast-container');
        
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
            
            // Add toast container styles
            const style = document.createElement('style');
            style.innerHTML = `
                .toast-container {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 9999;
                }
                
                .toast {
                    display: flex;
                    align-items: center;
                    min-width: 250px;
                    max-width: 350px;
                    padding: 12px 15px;
                    border-radius: 4px;
                    margin-bottom: 10px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    animation: toast-slide-in 0.2s ease-out forwards;
                    opacity: 0;
                    transform: translateX(50px);
                }
                
                .toast-success {
                    background-color: #e7f7ee;
                    border-left: 4px solid #28a745;
                    color: #1e7e34;
                }
                
                .toast-error {
                    background-color: #f8e7e7;
                    border-left: 4px solid #dc3545;
                    color: #bd2130;
                }
                
                .toast-info {
                    background-color: #e7f1f8;
                    border-left: 4px solid #1890ff;
                    color: #0068c5;
                }
                
                .toast-icon {
                    margin-right: 10px;
                    font-size: 18px;
                }
                
                .toast-message {
                    flex: 1;
                    font-size: 14px;
                }
                
                .toast-close {
                    background: none;
                    border: none;
                    font-size: 16px;
                    margin-left: 10px;
                    cursor: pointer;
                    color: inherit;
                    opacity: 0.7;
                }
                
                .toast-close:hover {
                    opacity: 1;
                }
                
                @keyframes toast-slide-in {
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes toast-slide-out {
                    to {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        // Set toast icon based on type
        let icon = '';
        if (type === 'success') {
            icon = '<i class="fas fa-check-circle toast-icon"></i>';
        } else if (type === 'error') {
            icon = '<i class="fas fa-exclamation-circle toast-icon"></i>';
        } else {
            icon = '<i class="fas fa-info-circle toast-icon"></i>';
        }
        
        // Set toast content
        toast.innerHTML = `
            ${icon}
            <div class="toast-message">${message}</div>
            <button class="toast-close">&times;</button>
        `;
        
        // Add toast to container
        toastContainer.appendChild(toast);
        
        // Set up close button
        const closeButton = toast.querySelector('.toast-close');
        closeButton.addEventListener('click', function() {
            removeToast(toast);
        });
        
        // Auto remove toast after 5 seconds
        setTimeout(() => {
            removeToast(toast);
        }, 5000);
    }
    
    function removeToast(toast) {
        toast.style.animation = 'toast-slide-out 0.2s ease-in forwards';
        setTimeout(() => {
            toast.remove();
        }, 200);
    }
});
