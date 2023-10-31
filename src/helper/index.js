
// Dev
//export const baseUrl = "http://192.168.100.2:3000"

// Prod
export const baseUrl = "https://haqqpad-landing-server.fly.dev"

export const subscribe = async (email) => {
    try {
        const response = await fetch(`${baseUrl}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            return { success: true }
        } else {
            return { error: "Email not Valid" }
        }
    } catch (error) {
        return { error: "Requsest error" }
    }
};


export const raffle = async (wallet) => {
    try {
        const response = await fetch(`${baseUrl}/raffle`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ wallet })
        });

        if (response.ok) {
            return { success: true }
        } else {
            return { error: "Wallet address not Valid" }
        }
    } catch (error) {
        return { error: "Requsest error" }
    }
};


export const downloaded = async (hash) => {
    try {
        const response = await fetch(`${baseUrl}/downloaded`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hash })
        });

        if (response.ok) {
            return { success: true }
        } else {
            return { error: "Something went wrong" }
        }
    } catch (error) {
        return { error: "Requsest error" }
    }
};


export const applied = async (hash) => {
    try {
        const response = await fetch(`${baseUrl}/applied`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ hash })
        });

        if (response.ok) {
            return { success: true }
        } else {
            return { error: "Something went wrong" }
        }
    } catch (error) {
        return { error: "Requsest error" }
    }
};