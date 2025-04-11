# Cookie Code CTF Challenge

Solve the CTF challenge to test your skills in cookie tampering, privilege escalation, and metadata forensics.

---

## Challenge Prompt

You have access to a login portal.  
Explore the system and find the hidden flag.  
 
_Hint: The system only listens to users with the right privileges..._

---

## Solution

1. Log in with any name (e.g., `guest`)  
   → You'll land on a dashboard showing:  
   `Admin Privileges: false`

2. Open browser **DevTools → Application → Cookies**  
   → Find the `auth` cookie storing:
  `
   { "username": "guest", "admin": false }`

3. Edit the cookie manually
→ Change admin: false to admin: true

4. Refresh the admin page
→ A new image appears with a suspicious message
→ Check Network → Headers → custom header:
X-Clue: Right access, Wrong place. Try the image.

5. Download the image
→ Use exiftool

6. Extract the flag from the image's metadata
→ Under the Comment field
