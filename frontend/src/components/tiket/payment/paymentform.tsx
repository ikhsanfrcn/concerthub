"use client";

export default function PaymentForm(){
    return (
        <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-lg font-semibold mb-4">1. Review your Information</h2>
        <ul className="text-sm mb-6 space-y-2">
          <li>👤 Sylvie Vanbeek</li>
          <li>📞 8023456789</li>
          <li>📍 Delftwegstraat 23, Delft, Netherlands</li>
          <li>✉️ sylvievanbeek@gmail.com</li>
        </ul>
        
        <div className="space-y-2 mb-6">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-sm">Missed events insurance</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" defaultChecked />
          <span className="text-sm">Use your gift card</span>
        </label>
      </div>

      <h2 className="text-lg font-semibold mb-4">2. Select your payment method</h2>

      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <p className="text-sm font-medium mb-2">Your last purchase methods</p>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <img src="https://s3-alpha-sig.figma.com/img/9f38/94e4/67d95187a837269a3818fb36c0c1432a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LgUsIguMEehX1wRPwHKP9fUieLipUbY58OucnVgvLb4MzCZGgJNNQ~x3Od-P0trnfwcEWDlb17xkL6f7TFxFcqDe6HuR9Sfp7~frJN0wRMCvK~S4qvuIaQg48QGNiPJxs84TqdGnLEhixtew6cPkpmeBzK8RPZlEc3ioQnlFb68hXgsGatriLcpNlgz5AycRm5s80fhsbM9tkPGvo9R75utxOF4MSdLeJhTOD43h4XE0ncE2GrTyWLvHmqytxFcvAGG9v6raptYhkQ51F7dECEbx0xk9YsK9htBnrP8qqvDeeotZAakTxgXdygFKbKaS8DNdjjnKS~tXtnDy2acduw__" alt="Visa" className="w-8" />
            <span className="text-sm">Emma Clark ••••011</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://s3-alpha-sig.figma.com/img/cc8c/79d1/7b9ba2374b797814f9accd819f8f7853?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ETB8vQCwHe5R4xGzo8mddU1o9sL2nRq6HkJZ4GAPni2BtyBxv5MLQIO1tm8ZK9A7Wy49fxiVk0GfVHmTKXiON0s7gmCSYdZqY4QCts4go16dUrFiLWsRQckdZ9DGiIlKC6Zn-HkIjZEZZbB9Rk1lackw8TNC~CEtH4inVcMIS4671qUt4zAZRHKvlwVlHtMWdMd4Ip4xobF8hZiVWlaDaVQ8cxXbg0~9yPDzwK4YScQwyGv1FgS0FTVwBWx5C6odWGFHiHoTHSBqQCiODUEQN~AbCWZskzI9VJBsgnLLvJ3j2KNs8ni8-i6GEp~~qWCL~oaQ23epx3bganpfs2nfGg__" alt="MasterCard" className="w-8" />
            <span className="text-sm">Paul Bros ••••238</span>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <p className="text-sm font-medium mb-2">Add a new method:</p>
        <div className="grid grid-cols-3 gap-4">
          <img src="https://s3-alpha-sig.figma.com/img/4374/054c/3d4c4b969ad22979d7c1dbe518f53128?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=W5yvy~GUYpumYILdmZVKaRXj827JTWQYyhzk1NXp6ATSmTbK00XPUqdq-v769FM25kZhw41K7xMnBokVq2~~jUWAnx8Iv0N0D3IIFzaBqw1HvY~pzTa3rGqMHlUMUMLPC4YsfS9GIPfo9M35wJ6iWc~U-yoKV2l9fbevLNn-Gwfj~Jm37XkYz-dpcVv6sg5H65Yif4NyUpezDAHl3MimLGrXxuwaPCUpV92OvRE5F7TfocIMsGQ9R2l8nofF6rC8hycpwbtY-Ew28ymsjiBCRuwdcpxKFaeLex31EOGOCY9JLPdZ9oKQNpMmqxtK-IMuOY3kplNV2fMGTtedF7UMqQ__" alt="Klarna" className="w-10 mx-auto" />
          <img src="https://s3-alpha-sig.figma.com/img/cc8c/79d1/7b9ba2374b797814f9accd819f8f7853?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ETB8vQCwHe5R4xGzo8mddU1o9sL2nRq6HkJZ4GAPni2BtyBxv5MLQIO1tm8ZK9A7Wy49fxiVk0GfVHmTKXiON0s7gmCSYdZqY4QCts4go16dUrFiLWsRQckdZ9DGiIlKC6Zn-HkIjZEZZbB9Rk1lackw8TNC~CEtH4inVcMIS4671qUt4zAZRHKvlwVlHtMWdMd4Ip4xobF8hZiVWlaDaVQ8cxXbg0~9yPDzwK4YScQwyGv1FgS0FTVwBWx5C6odWGFHiHoTHSBqQCiODUEQN~AbCWZskzI9VJBsgnLLvJ3j2KNs8ni8-i6GEp~~qWCL~oaQ23epx3bganpfs2nfGg__" alt="MasterCard" className="w-10 mx-auto" />
          <img src="https://s3-alpha-sig.figma.com/img/9f38/94e4/67d95187a837269a3818fb36c0c1432a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LgUsIguMEehX1wRPwHKP9fUieLipUbY58OucnVgvLb4MzCZGgJNNQ~x3Od-P0trnfwcEWDlb17xkL6f7TFxFcqDe6HuR9Sfp7~frJN0wRMCvK~S4qvuIaQg48QGNiPJxs84TqdGnLEhixtew6cPkpmeBzK8RPZlEc3ioQnlFb68hXgsGatriLcpNlgz5AycRm5s80fhsbM9tkPGvo9R75utxOF4MSdLeJhTOD43h4XE0ncE2GrTyWLvHmqytxFcvAGG9v6raptYhkQ51F7dECEbx0xk9YsK9htBnrP8qqvDeeotZAakTxgXdygFKbKaS8DNdjjnKS~tXtnDy2acduw__" alt="Visa" className="w-10 mx-auto" />
          <img src="https://s3-alpha-sig.figma.com/img/fefe/8a0e/c3ef70d633cc827fa9cfd021ba6c5e18?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FbuQRV7JQibvpxurl~mGscAdAUpLrNKGMZ6bSEFY8tdx~m3C4v9t-U-jdpwxFlJ986HMhYJpo~XavW2BrgKGNYCJeJpEJpyiXruwP-E-jEgZwSG7E6IPhI6DxKIeaQjQulUA-g15Zg8ZBzocZJyTgkwIIOpn4ibGNzOZ-mn~dGcjiMyUf-wK3wkZ3jHn0o3bo4Lw2gQGysQBJ74I~Eb6rDKGRrBFrIzpRYwP0V43Twix-575KizzgI9WW5~1nzIWnPo2ByyX8myGJgUbjDaHTvn3DDngu2ec2vfsqj6QWCmCFZdKSdu5XBgQrCaTWdZfyr-NNdJ62Vs-yUmMnNARuQ__" alt="Amex" className="w-10 mx-auto" />
          <img src="https://play-lh.googleusercontent.com/bo7Qeq8XZVI4hyXTVyG7Oi3hMiqADqruYeyQWqzzJzNHCYNVLmpAne0XP4_JH2AJ1tE" alt="Revolut" className="w-10 mx-auto" />
          <img src="https://s3-alpha-sig.figma.com/img/f2e2/ebc7/c3dc3216a8cc5809097f777ff7b9cc7d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UDaMPw1x9RB4ZeAloQCE3t~zhGlxt5eaR7-trW2K5Iamm~HaBFyi8TkmhtixRoYkjpHYg4GHMf1WRzSZpQPCohaqsfbHrC6o76~GGy2I1NEqZa6sNil3fy4kJ8JwA-cz1wh181ic3X8GMoP~FugvcgogoDMjwbw6AyhWZi1EJOsdoXxcf67kyWbWRCD-P5HAzzb4pRSx8zs~tOmdJQI3G5kX~CPLAX8Mapj6gSTjXf4HhFaONfFc9M6rdYNRVuThLfYpcQGuIhHfUWHhAt5umFt8QZ7csXHIbIlMDWz5U0v9i26OkXhi-GlusZvsas~XPkEz3rrywb5CO1vW9b0jpw__" alt="PayPal" className="w-10 mx-auto border rounded-md p-1" />
        </div>
        <p className="text-xs text-gray-500 mt-2">You’ll be forwarded to PayPal to complete your payment. <span className="underline cursor-pointer">Continue</span></p>
      </div>

        </div>
    )
}