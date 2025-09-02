<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $product->name }} - Product Details</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: white;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 2px solid #e5e5e5;
            padding-bottom: 20px;
        }

        .header h1 {
            font-size: 28px;
            color: #2563eb;
            margin-bottom: 5px;
        }

        .header p {
            color: #666;
            font-size: 14px;
        }

        .product-info {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 25px;
            margin-bottom: 30px;
        }

        .product-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            gap: 15px;
        }

        .color-circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid #ddd;
            flex-shrink: 0;
        }

        .product-title {
            flex: 1;
        }

        .product-title h2 {
            font-size: 24px;
            color: #1f2937;
            margin-bottom: 5px;
        }

        .product-id {
            color: #6b7280;
            font-size: 14px;
        }

        .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }

        .detail-item {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }

        .detail-label {
            font-size: 12px;
            color: #6b7280;
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .detail-value {
            font-size: 16px;
            font-weight: 500;
            color: #1f2937;
        }

        .quantity-display {
            text-align: center;
            background: white;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 30px;
        }

        .quantity-number {
            font-size: 48px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 5px;
        }

        .quantity-label {
            color: #6b7280;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 600;
        }

        .stock-status {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .stock-in {
            background: #dcfce7;
            color: #166534;
        }

        .stock-low {
            background: #fef3c7;
            color: #92400e;
        }

        .stock-out {
            background: #fecaca;
            color: #991b1b;
        }

        .footer {
            border-top: 1px solid #e5e5e5;
            padding-top: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
        }

        .print-date {
            margin-bottom: 10px;
        }

        @media print {
            body {
                padding: 0;
                max-width: none;
            }
            
            .header {
                margin-bottom: 20px;
                padding-bottom: 15px;
            }
            
            .product-info {
                break-inside: avoid;
            }
            
            .quantity-display {
                break-inside: avoid;
            }
        }

        @media (max-width: 600px) {
            .details-grid {
                grid-template-columns: 1fr;
            }
            
            .product-header {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>📦 Product Details</h1>
        <p>Inventory Management System</p>
    </div>

    <div class="product-info">
        <div class="product-header">
            <div class="color-circle" style="background-color: {{ 
                strtolower($product->color) === 'white' ? '#ffffff' :
                (strtolower($product->color) === 'black' ? '#000000' :
                (strtolower($product->color) === 'red' ? '#ef4444' :
                (strtolower($product->color) === 'blue' ? '#3b82f6' :
                (strtolower($product->color) === 'green' ? '#10b981' :
                (strtolower($product->color) === 'yellow' ? '#f59e0b' :
                (strtolower($product->color) === 'purple' ? '#8b5cf6' :
                (strtolower($product->color) === 'pink' ? '#ec4899' :
                (strtolower($product->color) === 'gray' ? '#6b7280' :
                (strtolower($product->color) === 'orange' ? '#f97316' :
                (strtolower($product->color) === 'brown' ? '#92400e' :
                (strtolower($product->color) === 'navy' ? '#1e3a8a' : '#6b7280'))))))))))) 
            }}; border-color: {{ strtolower($product->color) === 'white' ? '#ddd' : 'transparent' }};"></div>
            <div class="product-title">
                <h2>{{ $product->name }}</h2>
                <div class="product-id">Product ID: #{{ $product->id }}</div>
            </div>
        </div>

        <div class="details-grid">
            <div class="detail-item">
                <div class="detail-label">Product Name</div>
                <div class="detail-value">{{ $product->name }}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Color</div>
                <div class="detail-value">{{ $product->color }}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Created Date</div>
                <div class="detail-value">{{ $product->created_at->format('F j, Y') }}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Last Updated</div>
                <div class="detail-value">{{ $product->updated_at->format('F j, Y') }}</div>
            </div>
        </div>
    </div>

    <div class="quantity-display">
        <div class="quantity-number">{{ $product->quantity }}</div>
        <div class="quantity-label">Units Available</div>
        <div style="margin-top: 10px;">
            @if($product->quantity === 0)
                <span class="stock-status stock-out">Out of Stock</span>
            @elseif($product->quantity < 10)
                <span class="stock-status stock-low">Low Stock</span>
            @else
                <span class="stock-status stock-in">In Stock</span>
            @endif
        </div>
    </div>

    @if($product->quantity < 10)
    <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 15px; margin-bottom: 30px;">
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">⚠️</span>
            <div>
                <strong style="color: #92400e;">
                    {{ $product->quantity === 0 ? 'Stock Alert: Out of Stock!' : 'Stock Alert: Low Inventory!' }}
                </strong>
                <div style="color: #92400e; font-size: 14px; margin-top: 5px;">
                    {{ $product->quantity === 0 
                        ? 'This product is completely out of stock and requires immediate restocking.' 
                        : 'This product has low inventory levels and may need restocking soon.' }}
                </div>
            </div>
        </div>
    </div>
    @endif

    <div class="footer">
        <div class="print-date">
            Generated on: {{ now()->format('F j, Y \a\t g:i A') }}
        </div>
        <div>
            Product Management System - Inventory Report
        </div>
    </div>

    <script>
        // Auto-print when page loads
        window.onload = function() {
            window.print();
        };
    </script>
</body>
</html>