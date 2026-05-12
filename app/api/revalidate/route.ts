import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Webhook received:', body)

    // Revalidate halaman utama
    revalidatePath('/')
    
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      message: 'Halaman utama berhasil direfresh' 
    })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 })
  }
}
