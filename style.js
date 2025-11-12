<div class="form-container">
    <h2>Student Registration</h2>
    <form id="student-register-form">
        <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" required/>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" required/>
        </div>
        <div class="form-group">
            <label for="rollno">Roll Number</label>
            <input type="text" id="rollno" required/>
        </div>
        <div class="form-group">
            <label for="department">Department</label>
            <select id="department" required>
                <option value="">Select Department</option>
                <option value="cse">Computer Science</option>
                <option value="ece">Electronics</option>
                <option value="mech">Mechanical</option>
                
            </select>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" required/>
        </div>
        <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" required/>
        </div>
        <button type="submit" class="btn">Register</button>
    </form>
    <p>Already registered? <a href="login.html">Login here</a></p>
</div>