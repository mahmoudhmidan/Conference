@extends('layouts.app')

@section('content')
<section class="relative container m-5">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div class="flex flex-wrap m-5 p-4">
            <!-- Text Section -->
            <div class="w-full lg:w-1/2 flex flex-col justify-center p-4">
                <div>
                    <h2 class="text-center font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                        {{ $machine->title }}
                    </h2>
                    <p class="text-gray-500 text-base font-normal mb-5">
                        {{ $machine->description }}
                    </p>
                </div>
            </div>
            <!-- Gallery Section -->
            <div class="w-full lg:w-1/2 p-4">
                <div class="slideshow-container">
                    <div class="image-gallery">
                        @foreach(json_decode($machine->images, true) as $index => $image)
                            <div class="image-container">
                                <img src="{{ asset('storage/' . $image) }}" alt="{{ $machine->title }}" class="gallery-img">
                            </div>
                        @endforeach
                    </div>
                    <a class="prev-img" onclick="showSlides(-1)">❮</a>
                    <a class="next-img" onclick="showSlides(1)">❯</a>
                </div>
                <div class="bottom-img-container">
                    @foreach(json_decode($machine->images, true) as $index => $image)
                        <img src="{{ asset('storage/' . $image) }}" alt="{{ $machine->title }}" 
                             class="bottom-img" onclick="currentSlide({{ $index + 1 }})">
                    @endforeach
                </div>
            </div>
        </div>

        <!-- Features Section -->
        <div class="m-5 p-5">
            <h3 class="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                Machine Features
            </h3>
            <ul class="grid gap-y-4 mb-8">
                @foreach(explode('', $machine->features) as $feature)
                    <div style="display: flex; align-items: center;">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="26" height="26" rx="13" fill="#d4b42c" />
                            <path d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183" stroke="white" stroke-width="1.6" stroke-linecap="round" />
                        </svg>
                        <li class="mx-3">{{ trim($feature) }}</li>
                    </div>
                @endforeach
            </ul>
        </div>

        <!-- Button Section -->
        <div class="flex items-center justify-center gap-3">
            <div class="flex justify-center w-full">
                <a href="{{ route('home') }}" 
                   style="background-color: #d4b42c;" 
                   class="text-center w-full max-w-xs px-5 py-4 rounded-[100px] flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700">
                    Go To Website
                </a>
            </div>
        </div>
    </div>
</section>
@endsection

@push('styles')
<style>
    .slideshow-container {
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    .image-gallery {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }
    .image-container {
        min-width: 100%;
        height: 100%;
    }
    .gallery-img {
        width: 100%;
        height: 100%;
    }
    .prev-img, .next-img {
        cursor: pointer;
        position: absolute;
        top: 50%;
        padding: 16px;
        margin-top: -22px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
    }
    .prev-img { left: 10px; }
    .next-img { right: 10px; }
    .bottom-img-container {
        text-align: center;
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
    .bottom-img {
        height: 80px;
        width: 80px;
        margin: 0 10px;
        cursor: pointer;
    }
</style>
@endpush

@push('scripts')
<script>
    let index = 1;
    const slides = document.querySelectorAll('.image-container');

    function showSlides(n) {
        index += n;
        if (index > slides.length) index = 1;
        if (index < 1) index = slides.length;
        document.querySelector('.image-gallery').style.transform = `translateX(${-100 * (index - 1)}%)`;
    }

    function currentSlide(n) {
        index = n;
        document.querySelector('.image-gallery').style.transform = `translateX(${-100 * (index - 1)}%)`;
    }
</script>
@endpush