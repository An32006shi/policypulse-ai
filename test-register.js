async function testRegister() {
    try {
        console.log('Testing Registration...');
        const res = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Test User',
                email: 'test' + Date.now() + '@example.com',
                password: 'password123',
                role: 'citizen'
            })
        });

        const data = await res.json();
        console.log('Status:', res.status);
        console.log('Response:', data);
    } catch (e) {
        console.error('Fetch error:', e);
    }
}

testRegister();
